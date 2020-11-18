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
    public $relationship = 'morphOne';

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\Fieldsets';

    /**
     * @var array
     */
    public $settings = [
        'fieldset' => null,
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.fieldset' => 'required',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.fieldset' => 'fieldset',
    ];

    /**
     * @var array
     */
    public $validation = false;

    /**
     * Generate relationship methods for associated Model.
     *
     * @param Fusion\Models\Field $field
     *
     * @return string
     */
    public function generateRelationship($field)
    {
        $model     = Fieldset::find($field->settings['fieldset']);
        $namespace = $this->namespace.'\\'.Str::studly($model->handle);
        $stub      = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_namespace}' => $namespace,
            '{related_name}'      => 'fieldsetable',
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
        dd($model->{$field->handle});
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
        return new FieldsetResource($this->getValue($model, $field));
    }
}
