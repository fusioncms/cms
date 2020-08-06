<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('settings.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [];

        if ($fieldset = $this->route('group')->fieldset) {
            $rules += $fieldset->fields->flatMap(function($field) {
                return $field->type()->rules($field, $this->{$field->handle});
            })->toArray();
        }

        return $rules;
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        if ($fieldset = $this->route('group')->fieldset) {
            return $fieldset->fields->flatMap(function($field) {
                return $field->type()->attributes($field, $this->{$field->handle});
            })->toArray();
        }

        return [];
    }
}
