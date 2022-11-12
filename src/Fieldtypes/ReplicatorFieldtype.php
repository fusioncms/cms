<?php

namespace Fusion\Fieldtypes;

use Fusion\Http\Resources\ReplicantResource;
use Fusion\Models\Field;
use Fusion\Models\Replicator;
use Fusion\Models\Section;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ReplicatorFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Replicator';

    /**
     * @var string
     */
    public $icon = 'magic';

    /**
     * @var string
     */
    public $description = 'A matrix-like fieldtype.';

    /**
     * @var array
     */
    public $settings = [
        'replicator' => null,
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.replicator' => 'sometimes',
        'settings.sections'   => 'required|array',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.replicator' => 'replicator',
        'settings.sections'   => 'sections',
    ];

    /**
     * @var string
     */
    public $relationship = 'replicator';

    /**
     * Create/update Field post-save.
     *
     * @param Field $field
     *
     * @return void
     */
    public function onSaved(Field $field)
    {
        if (@is_null($field->settings['replicator'])) {
            $replicator = Replicator::create([
                'field_id' => $field->id,
                'name'     => $field->name,
                'handle'   => $field->handle,
                'uniqid'   => unique_id(5),
            ]);
        } else {
            $replicator = Replicator::where([
                'id'       => $field->settings['replicator'],
                'field_id' => $field->id,
            ])->firstOrFail();

            $replicator->touch();
        }

        // update field w/o events..
        $field = Field::find($field->id);
        $field->withoutEvents(function () use ($field, $replicator) {
            $field->settings = ['replicator' => $replicator->id];
            $field->save();
        });
    }

    /**
     * Handle Field before removal.
     *
     * @param Field $field
     *
     * @return void
     */
    public function onBeforeDelete(Field $field)
    {
        Replicator::where([
            'id'       => $field->settings['replicator'],
            'field_id' => $field->id,
        ])
        ->firstOrFail()
        ->delete();
    }

    /**
     * Generate relationship methods for associated Model.
     *
     * @param Fusion\Models\Field $field
     *
     * @return string
     */
    public function generateRelationship(Field $field)
    {
        $replicator    = Replicator::find($field->settings['replicator']);
        $stub          = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));
        $relationships = collect([]);

        $relationships->push(strtr($stub, [
            '{id}'            => $replicator->id,
            '{handle}'        => $replicator->handle,
            '{studly_handle}' => Str::studly($replicator->handle),
        ]));

        $replicator->sections->each(function ($section) use ($replicator, $relationships) {
            $replicant = $replicator->getBuilder($section);
            $namespace = get_class($replicant);
            $handle = "rp_{$section->handle}_{$replicator->uniqid}";
            $stub = File::get(fusion_path('/stubs/relationships/morphToMany.stub'));

            $relationships->push(strtr($stub, [
                '{handle}'            => $handle,
                '{studly_handle}'     => Str::afterLast($namespace, '\\'),
                '{related_pivot_key}' => 'replicant_id',
                '{related_namespace}' => $namespace,
                '{related_table}'     => 'replicators_pivot',
                '{where_clause}'      => "->where('replicators_pivot.section_id', {$section->id})",
                '{order_clause}'      => "->withPivot('order')",
            ]));
        });

        return $relationships->implode("\n\n");
    }

    /**
     * Update relationship data in storage.
     *
     * @param \Illuminate\Eloquent\Model $model
     * @param \Fusion\Models\Field       $field
     *
     * @return void
     */
    public function persistRelationship($model, Field $field, $value = null)
    {
        $replicator = Replicator::find($field->settings['replicator']);
        $replicants = $this->persistReplicants($replicator, $field, $value);
        $sections   = $replicator->sections;

        $sections->each(function ($section) use ($model, $replicator, $replicants) {
            $handle = "rp_{$section->handle}_{$replicator->uniqid}";
            $existing = $model->{$handle}->pluck('id');
            $attached = $replicants->where('section_id', $section->id)
                ->mapWithKeys(function ($replicant, $index) use ($section) {
                    return [$replicant->id => [
                        'section_id' => $section->id,
                        'order'      => ($index + 1), ],
                    ];
                });

            // removal..
            $existing
                ->diff($attached->keys())
                ->each(function ($id) use ($replicator, $section) {
                    $replicator
                        ->getBuilder($section)
                        ->findOrFail($id)
                        ->delete();
                });

            // update `replicators_pivot` table..
            $model->{$handle}()->newPivotStatementForId($existing)->where('section_id', $section->id)->delete();
            $model->{$handle}()->attach($attached);
        });
    }

    /**
     * Get custom rules when saving field.
     *
     * @param Field $field
     * @param mixed $value
     *
     * @return array
     */
    public function rules(Field $field, $value = null)
    {
        $rules = [];

        foreach ($value as $key => $input) {
            $section = Section::find($input['section']['id']);
            $prefix  = "{$field->handle}.{$key}.fields.";

            foreach ($section->fields as $sub) {
                $rule       = $sub->type()->rules($sub, $value[$key]['fields'][$sub->handle]);
                $handle     = key($rule);
                $validation = current($rule);

                $rules[$prefix.$handle] = $validation;
            }
        }

        return $rules;
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @param Field $field
     * @param mixed $value
     *
     * @return array
     */
    public function attributes(Field $field, $value = null)
    {
        $attributes = [];

        foreach ($value as $key => $input) {
            $section = Section::find($input['section']['id']);
            $prefix  = "{$field->handle}.{$key}.fields.";

            foreach ($section->fields as $sub) {
                $attributes[$prefix.$sub->handle] = $sub->name;
            }
        }

        return $attributes;
    }

    /**
     * Returns resource object of field.
     *
     * @param \Illuminate\Eloquent\Model $model
     * @param \Fusion\Models\Field       $field
     *
     * @return \Fusion\Http\Resources\ReplicantResource
     */
    public function getResource($model, Field $field)
    {
        return $this->getValue($model, $field)->map(function ($replicant) {
            return new ReplicantResource($replicant);
        });
    }

    /**
     * Persist replicator's replicants.
     *
     * @param \Fusion\Models\Replicator $replicator
     * @param \Fusion\Models\Field      $field
     *
     * @return \Illuminate\Support\Collection
     */
    private function persistReplicants(Replicator $replicator, Field $field, $value = null)
    {
        return collect($value ?? request()->input($field->handle, []))
            ->map(function ($input) use ($replicator) {
                $section = Section::findOrFail($input['section']['id']);
                $builder = $replicator->getBuilder($section);

                // persist replicant..
                if (isset($input['id'])) {
                    $replicant = $builder->find($input['id']);
                    $replicant->update($input['fields']);
                } else {
                    $replicant = $builder->create(array_merge([
                        'replicator_id' => $replicator->id,
                        'section_id'    => $section->id,
                    ], $input['fields']));
                }

                // persist relationships..
                $section->fields->each(function ($field) use ($replicant, $input) {
                    if ($field->type()->hasRelationship()) {
                        /**
                         * Merge replicator field into Request object.
                         */
                        request()->merge([
                            $field->handle => $input['fields'][$field->handle],
                        ]);

                        $field->type()->persistRelationship($replicant, $field);
                    }
                });

                return $replicant;
            });
    }
}
