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
        'settings.replicator' => 'required'
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.replicator' => 'replicator'
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
        $field->withoutEvents(function() use ($field, $replicator) {
            $field->settings = ['replicator' => $replicator->id];
            $field->save();
        });
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
        $oldValues = $model->{$field->handle}->pluck('id');
        $newValues = collect(request()->input($field->handle))->mapWithKeys(function($id) use ($field) {
            return [
                $id => ['field_id' => $field->id]
            ];
        });

        $model->{$field->handle}()->detach($oldValues);
        $model->{$field->handle}()->attach($newValues);
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
        return ReplicantResource::collection($this->getValue($model, $field));
    }
}