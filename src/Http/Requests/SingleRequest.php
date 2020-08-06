<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Matrix;
use Fusion\Services\Builders\Single;
use Illuminate\Foundation\Http\FormRequest;

class SingleRequest extends FormRequest
{
    public function __construct()
    {
        $this->matrix = Matrix::findOrFail(request()->route('single'));
        $this->model = (new Single($this->matrix->handle))->make();
        $this->fieldset = $this->matrix->fieldset;
        $this->fields = $this->fieldset->fields ?? [];
        $this->relationships = $this->fieldset ? $this->fieldset->relationships() : [];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('entries.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'matrix_id' => $this->matrix->id,
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
            'matrix_id' => 'required',
            'name'      => 'required',
            'slug'      => 'required',
            'status'    => 'required|boolean',
        ];

        $rules += $this->fields->flatMap(function($field) {
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
        return $this->fields->flatMap(function($field) {
            return $field->type()->attributes($field, $this->{$field->handle});
        })->toArray();
    }
}
