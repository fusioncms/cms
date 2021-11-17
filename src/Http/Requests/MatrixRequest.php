<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Support\Str;
use Fusion\Models\Matrix;

class MatrixRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('matrices.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('matrices.update');
    }

    /**
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Matrix::count() === 0) return 0.0;

        $last_order = Matrix::all()->max(function ($matrix) { return $matrix->order; });

        return $last_order + 1.0;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'slug'   => $this->slug ?? Str::slug($this->name),
            'order'         => $this->matrix->order ?? $this->orderLast(),
            'status' => $this->status ?? true,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->matrix->id ?? null;

        return [
            'parent_id'          => 'sometimes|not_in:'.$id,
            'name'               => 'required|regex:/^[A-z]/i',
            'handle'             => ['required', 'unique:matrices,handle,'.$id, new NotAReservedKeyword()],
            'slug'               => 'required|unique:matrices,slug,'.$id,
            'order'             => 'sometimes',
            'description'        => 'sometimes',
            'type'               => 'required',
            'status'             => 'required|boolean',

            'sidebar'            => 'required|boolean',
            'quicklink'          => 'required|boolean',
            'icon'               => 'sometimes',

            'show_name_field'    => 'required|boolean',
            'name_label'         => 'sometimes',
            'name_format'        => 'required_if:show_name_field,false',

            'route'              => 'sometimes',
            'template'           => 'sometimes',

            'order_by'           => 'sometimes',
            'order_direction'    => 'sometimes',

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
