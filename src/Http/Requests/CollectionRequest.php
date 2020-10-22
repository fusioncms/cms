<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Matrix;
use Fusion\Services\Builders\Collection;

class CollectionRequest extends Request
{
    public function __construct()
    {
        $this->matrix        = Matrix::where('slug', request()->route('slug'))->firstOrFail();
        $this->model         = (new Collection($this->matrix->handle))->make();
        $this->blueprint     = $this->matrix->blueprint;
        $this->fields        = $this->blueprint->fields ?? collect();
        $this->relationships = $this->blueprint ? $this->blueprint->relationships() : [];
    }

    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('entries.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
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
            'status'    => $this->status ?? true,
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
