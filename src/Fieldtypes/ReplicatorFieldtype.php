<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;
use Illuminate\Support\Str;
use Fusion\Models\Replicator;
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
     * @var string
     */
    public $namespace = 'Fusion\Models\Replicator';

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
        $replicator = Replicator::where([
            'id'       => $field->settings['replicator'],
            'field_id' => $field->id
        ])->firstOrFail();

        $replicator->delete();
    }

    /**
     * Generate relationship methods for associated Model.
     *
     * @param  Fusion\Models\Field $field
     * @return string
     */
    public function generateRelationship(Field $field)
    {
        $model     = Replicator::find($field->settings['replicator']);
        $namespace = $this->namespace . '\\' . Str::studly($model->handle);
        $stub      = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => 'replicator_id',
            '{related_namespace}' => $namespace,
            '{related_table}'     => 'replicators_pivot',
            '{where_clause}'      => "->where('field_id', {$field->id})",
            '{order_clause}'      => "->orderBy('order')",
        ]);
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
        $replicants = collect(request()->input($field->handle) ?? []);

        $replicants->each(function($replicant) use ($replicator) {
            $section = Section::find($replicant->section);

            $replicator->replicant($section)
                ->updateOrCreate([
                    'id'           => $replicant->id,
                    'replicant_id' => $replicator->id
                ], $replicant->fields ?? []);

            // // persist relationships..
            // $section->fields->each(function($field) use ($replicant) {
            //     if ($field->type()->hasRelationship()) {
            //         $field->type()->persistRelationship($replicant, $field);
            //     }
            // });
        });

        $model->touch();
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
        return new ReplicatorResource($field->settings['replicator']);
    }
}