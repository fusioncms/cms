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
            foreach ($fieldset->fields as $field) {
                $rules = array_merge($rules,
                    $field->type()->rules($field, $this->{$field->handle}));
            }
        }

        return $rules;
    }
}
