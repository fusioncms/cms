<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Section;
use Fusion\Models\Replicator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Fusion\Http\Resources\ReplicantResource;

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
        'replicator' => null
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.replicator' => 'sometimes',
        'settings.sections'   => 'required|array'
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
     * Update Field Upon Save.
     * 
     * @param  Field  $field
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
                'field_id' => $field->id
            ])->firstOrFail();

            $replicator->touch();
        }
       
        // update field w/o events..
        $field = Field::find($field->id);
        $field->withoutEvents(function() use ($field, $replicator) {
            $field->settings = [ 'replicator' => $replicator->id ];
            $field->save();
        });
    }

    /**
     * Delete Field model after saved.
     * 
     * @param  Field  $field
     * @return void
     */
    public function onDeleted(Field $field)
    {
        Replicator::where([
            'id'       => $field->settings['replicator'],
            'field_id' => $field->id
        ])
        ->firstOrFail()
        ->delete();
    }

    /**
     * Generate relationship methods for associated Model.
     *
     * @param  Fusion\Models\Field $field
     * @return string
     */
    public function generateRelationship(Field $field)
    {
        $replicator = Replicator::find($field->settings['replicator']);

        return $replicator->sections->map(function($section) use ($replicator) {
            $replicant = $replicator->getBuilder($section);
            $namespace = get_class($replicant);
            $stub      = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

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
     * @param  Illuminate\Eloquent\Model  $model
     * @param  Fusion\Models\Field        $field
     * @return void
     */
    public function persistRelationship($model, Field $field)
    {
        $replicator = Replicator::find($field->settings['replicator']);

        $replicants = collect(request()->input($field->handle, []))
            ->map(function($item) use ($replicator) {
                $section = Section::find($item['section']['id']);
                $builder = $replicator->getBuilder($section);

                // persist replicant..
                if (isset($item['id'])) {
                    $replicant = $builder->find($item['id']);
                    $replicant->update($item['fields']);
                } else {
                    $replicant = $builder->create(array_merge([
                            'replicator_id' => $replicator->id,
                            'section_id'    => $section->id
                        ], $item['fields'])
                    );
                }

                // persist relationships..
                $section->fields->each(function($field) use ($replicant) {
                    if ($field->type()->hasRelationship()) {
                        $field->type()->persistRelationship($replicant, $field);
                    }
                });

                return $replicant;
            });

        // update `replicators_pivot` table..
        $replicator->sections->each(function($section) use ($model, $replicants) {
            $oldValues = $model->{"rp_{$section->handle}"}->pluck('id');
            $newValues = $replicants->where('section_id', $section->id)
                ->mapWithKeys(function($replicant, $index) use ($section) {
                    return [ $replicant->id => [
                            'section_id' => $section->id,
                            'order'      => ($index + 1)
                        ]
                    ];
                });

            $model->{"rp_{$section->handle}"}()->detach($oldValues);
            $model->{"rp_{$section->handle}"}()->attach($newValues);
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

        return $replicator->sections->flatMap(function($section) use ($model) {
            return $model->{"rp_{$section->handle}"};
        });
    }

    /**
     * Returns resource object of field.
     *
     * @param  Illuminate\Eloquent\Model  $model
     * @param  Fusion\Models\Field        $field
     * @return ReplicantResource
     */
    public function getResource($model, Field $field)
    {
        return $this->getValue($model, $field)->map(function($replicant) {
            return new ReplicantResource($replicant);
        });
    }
}