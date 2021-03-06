<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Support\Str;

class TaxonomyRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('taxonomies.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('taxonomies.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'slug' => $this->slug ?? Str::slug($this->name),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->taxonomy->id ?? null;

        return [
            'name'        => 'required|regex:/^[A-z]/i',
            'handle'      => ['required', 'not_regex:/[^a-z0-9_]/i', 'unique:taxonomies,handle,'.$id, new NotAReservedKeyword()],
            'slug'        => 'required|unique:taxonomies,slug,'.$id,
            'description' => 'sometimes',

            'sidebar'     => 'required',
            'icon'        => 'sometimes',

            'route'       => 'sometimes',
            'template'    => 'sometimes',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'handle.not_regex' => 'Handle must contain only letters, numbers, and underscores.',
        ];
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
                $validator->errors()->add('name', 'The name has already been taken.');
            }
        });
    }
}
