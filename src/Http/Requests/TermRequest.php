<?php

namespace Fusion\Http\Requests;

use Fusion\Services\Builders;
use Illuminate\Support\Str;

class TermRequest extends Request
{
    public function __construct()
    {
        $this->taxonomy      = request()->route('taxonomy');
        $this->model         = Builders\Taxonomy::resolve($this->taxonomy->handle);
        $this->blueprint     = $this->taxonomy->blueprint;
        $this->fields        = $this->blueprint ? $this->blueprint->fields : [];
        $this->relationships = $this->blueprint ? $this->blueprint->relationships() : [];
    }

    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('terms.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('terms.update');
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
            'slug'        => $this->slug ? $this->slug : Str::slug($this->name),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->route('term') ?? null;

        $rules = [
            'taxonomy_id' => 'required|integer',
            'parent_id'   => 'sometimes|integer',
            'name'        => 'required',
            'slug'        => 'required|unique:'.$this->model->getTable().',slug,'.$id,
            'status'      => 'required|boolean',
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

    /**
     * Configure the validator instance.
     *
     * @param \Illuminate\Validation\Validator $validator
     *
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
