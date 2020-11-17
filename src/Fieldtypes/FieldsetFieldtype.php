<?php

namespace Fusion\Fieldtypes;

use Fusion\Http\Resources\FieldsetResource;
use Fusion\Models\Fieldset;
use Fusion\Models\Field;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class FieldsetFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Fieldset';

    /**
     * @var string
     */
    public $icon = 'layer-group';

    /**
     * @var string
     */
    public $description = 'A curated collection of fields.';

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\Fieldset';

    /**
     * Generate relationship methods for associated Model.
     *
     * @param Fusion\Models\Field $field
     *
     * @return string
     */
    public function generateRelationship($field)
    {
        $stub = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => 'fieldset_id',
            '{related_namespace}' => $this->namespace,
            '{related_table}'     => 'fieldsets_pivot',
            '{where_clause}'      => "->where('field_id', {$field->id})",
            '{order_clause}'      => "->orderBy('order')",
        ]);
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
        $oldValues = $model->{$field->handle}->pluck('id');
        $newValues = collect(request()->input($field->handle))
            ->mapWithKeys(function ($id) use ($field) {
                return [
                    $id => [
                        'field_id' => $field->id,
                    ],
                ];
            });

        $model->{$field->handle}()->detach($oldValues);
        $model->{$field->handle}()->attach($newValues);
        $model->flush();
    }

    /**
     * Returns resource object of field.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return FieldsetResource
     */
    public function getResource($model, Field $field)
    {
        return FieldsetResource::collection($this->getValue($model, $field));
    }
}
