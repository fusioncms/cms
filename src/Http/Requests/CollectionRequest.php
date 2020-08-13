<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Matrix;
use Fusion\Services\Builders\Collection;
use Illuminate\Foundation\Http\FormRequest;

class CollectionRequest extends FormRequest
{
    public function __construct()
    {
        $this->matrix        = Matrix::where('slug', request()->route('slug'))->firstOrFail();
        $this->model         = (new Collection($this->matrix->handle))->make();
        $this->fieldset      = $this->matrix->fieldset;
        $this->fields        = $this->fieldset->fields ?? [];
        $this->relationships = $this->fieldset ? $this->fieldset->relationships() : [];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('entries.'.($this->method() === 'POST' ? 'create' : 'update'));
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
            'status'    => $this->status ?? 1,
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
            'matrix_id' => 'required|integer',
            'slug'      => 'unique:'.$this->model->getTable().',slug,'.request()->id,
            'status'    => 'required|boolean',
        ];

        if ($this->matrix->show_name_field) {
            $rules['name'] = 'required';
            $rules['slug'] .= '|required';
        }

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
