<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Illuminate\Foundation\Http\FormRequest;
use Fusion\Services\Builders\Taxonomy as Builder;

class TermRequest extends FormRequest
{

    public function __construct()
    {
        $this->taxonomy      = request()->route('taxonomy');
        $this->model         = (new Builder($this->taxonomy->handle))->make();
        $this->fieldset      = $this->taxonomy->fieldset;
        $this->fields        = $this->fieldset ? $this->fieldset->database() : [];
        $this->relationships = $this->fieldset ? $this->fieldset->relationships() : [];
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('terms.' . ($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'taxonomy_id' => $this->taxonomy->id,
            'slug'        => $this->slug ?? Str::slug($this->name)
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
            'taxonomy_id' => 'required|integer',
            'parent_id'   => 'sometimes|integer',
            'name'        => 'required',
            'slug'        => 'required|unique:' . $this->model->getTable() . ',slug,' . request()->id,
            'status'      => 'required|boolean',
        ];

        foreach ($this->fields as $field) {
            $rules[$field->handle] = $field->validation ?: 'sometimes';
        }

        return $rules;
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->has('slug')) {
                $validator->errors()->add('name', 'The slug name has already been taken.');
            }
        });
    }
}
