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
    public $relationship = 'morphToMany';

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
        $replicator = Replicator::find($field->settings['replicator']);

        return $replicator->sections->map(function ($section) use ($replicator) {
            $replicant = $replicator->getBuilder($section);
            $namespace = get_class($replicant);
            $stub = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

            return strtr($stub, [
                '{handle}'            => "rp_{$section->handle}",
                '{studly_handle}'     => Str::afterLast($namespace, '\\'),
                '{related_pivot_key}' => 'replicant_id',
                '{related_namespace}' => $namespace,
                '{related_table}'     => 'replicators_pivot',
                '{where_clause}'      => "->where('replicators_pivot.section_id', {$section->id})",
                '{order_clause}'      => "->orderBy('order')",
            ]);
        })->implode("\n\n");
    }

    /**
     * Update relationship data in storage.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return void
     */
    public function persistRelationship($model, Field $field)
    {
        $replicator = Replicator::find($field->settings['replicator']);

        /**
         * Retrieve existing replicants/section.
         */
        $existing = $replicator->sections->mapWithKeys(function ($section) use ($model) {
            return [$section->id => $model->{"rp_{$section->handle}"}->pluck('id')];
        });

        /**
         * Persist replicants.
         */
        $replicants = collect(request()->input($field->handle, []))
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

        /**
         * Update `replicators_pivot` table..
         */
        $replicator->sections
            ->each(function ($section) use ($replicator, $model, $replicants, $existing) {
                $attached = $replicants->where('section_id', $section->id)
                    ->mapWithKeys(function ($replicant, $index) use ($section) {
                        return [$replicant->id => ['section_id' => $section->id, 'order' => ($index + 1)]];
                    });

                // removal..
                $existing[$section->id]
                    ->diff($attached->keys())
                    ->each(function ($id) use ($replicator, $section) {
                        $replicator
                            ->getBuilder($section)
                            ->findOrFail($id)
                            ->delete();
                    });

                // update `replicators_pivot` table..
                $model->{"rp_{$section->handle}"}()->newPivotStatementForId($existing[$section->id])->where('section_id', $section->id)->delete();
                $model->{"rp_{$section->handle}"}()->attach($attached);
            });
    }

    /**
     * Returns value of field.
     *
     * @return mixed
     */
    public function getValue($model, Field $field)
    {
        $replicator = Replicator::find($field->settings['replicator']);

        return $replicator->sections->flatMap(function ($section) use ($model) {
            return $model->{"rp_{$section->handle}"};
        });
    }

    /**
     * Returns resource object of field.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return ReplicantResource
     */
    public function getResource($model, Field $field)
    {
        return $this->getValue($model, $field)->map(function ($replicant) {
            return new ReplicantResource($replicant);
        });
    }
}
