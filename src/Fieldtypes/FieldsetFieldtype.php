<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Fieldset;
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
     * Get custom attributes for validator errors.
     *
     * @param Field $field
     * @param mixed $value
     *
     * @return array
     */
    public function attributes(Field $field, $value = null)
    {
        $fieldset = Fieldset::findOrFail($field->settings['fieldset']);

        return $fieldset->fields->mapWithKeys(function ($field) use ($fieldset, $value) {
            $name  = "{$fieldset->handle}.{$field->handle}";
            $value = $field->type()->attributes($field, $value ? $value[$field->handle] : null);

            return [$name => $value[$field->handle]];
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
        $fieldset = Fieldset::findOrFail($field->settings['fieldset']);

        return $fieldset->fields->mapWithKeys(function ($field) use ($fieldset, $value) {
            $name = "{$fieldset->handle}.{$field->handle}";
            $rule = $field->type()->rules($field, $value ? $value[$field->handle] : null);

            return [$name => $rule[$field->handle] ?: 'sometimes'];
        });
    }

    /**
     * Get the fieldtype default value.
     *
     * @param Field $field
     *
     * @return mixed
     */
    public function getDefault(Field $field)
    {
        $fieldset = Fieldset::findOrFail($field->settings['fieldset']);

        return $fieldset->fields->mapWithKeys(function ($field) {
            return [$field->handle => ''];
        });
    }

    /**
     * Generate relationship methods for associated Model.
     *
     * @param Fusion\Models\Field $field
     *
     * @return string
     */
    public function generateRelationship($field)
    {
        $fieldset  = Fieldset::findOrFail($field->settings['fieldset']);
        $fieldset->refreshBuilder();

        $namespace = $this->namespace.'\\'.Str::studly($fieldset->handle);
        $stub      = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_namespace}' => $namespace,
            '{related_name}'      => 'fieldsetable',
            '{where_clause}'      => "->where('field_id', {$field->id})",
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
        $fieldset = Fieldset::findOrFail($field->settings['fieldset']);

        $model->{$field->handle}()->updateOrCreate([
            'field_id'    => $field->id,
            'fieldset_id' => $fieldset->id,
        ], request()->input($field->handle, []));
    }

    /**
     * Returns resource object of field.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return mixed
     */
    public function getResource($model, Field $field)
    {
        $fieldset = Fieldset::findOrFail($field->settings['fieldset']);
        $value    = $this->getValue($model, $field);

        return $fieldset->fields->mapWithKeys(function ($field) use ($value) {
            return [$field->handle => $value ? $field->type()->getValue($value, $field) : ''];
        });
    }
}
