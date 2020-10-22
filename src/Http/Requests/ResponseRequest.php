<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Form;

class ResponseRequest extends Request
{
    public function __construct()
    {
        $this->form          = Form::where('slug', request()->route('form'))->firstOrFail();
        $this->blueprint     = $this->form->blueprint;
        $this->fields        = $this->blueprint->fields ?? [];
        $this->relationships = $this->blueprint ? $this->blueprint->relationships() : [];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'form_id'                 => $this->form->id,
            'identifiable_ip_address' => $this->form->collect_ip_addresses ? request()->ip() : null,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'form_id'                 => 'required|integer',
            'identifiable_ip_address' => 'sometimes',
        ];

        $rules += $this->fields->flatMap(function ($field) {
            return $field->type()->rules($field, $this->{$field->handle});
        })->toArray();

        return $rules;
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return $this->fields->flatMap(function ($field) {
            return $field->type()->attributes($field, $this->{$field->handle});
        })->toArray();
    }
}
