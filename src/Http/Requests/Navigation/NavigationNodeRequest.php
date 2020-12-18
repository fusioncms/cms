<?php

namespace Fusion\Http\Requests\Navigation;

use Fusion\Http\Requests\Request;
use Fusion\Services\Builders;

class NavigationNodeRequest extends Request
{
    public function __construct()
    {
        $this->navigation    = request()->route('navigation');
        $this->model         = Builders\Navigation::resolve($this->navigation->handle);
        $this->blueprint     = $this->navigation->blueprint;
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
        return $this->user()->can('nodes.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('nodes.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'navigation_id' => $this->navigation->id,
            'order'         => $this->model->orderLast(),
            'status'        => $this->status ?? true,
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
            'navigation_id' => 'required|integer',
            'name'          => 'required',
            'url'           => 'sometimes',
            'new_window'    => 'sometimes',
            'parent_id'     => 'sometimes',
            'order'         => 'required',
            'status'        => 'required|boolean',
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
