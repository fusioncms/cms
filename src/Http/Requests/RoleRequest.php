<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class RoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('roles.'.($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'name'   => $this->name,
            'handle' => $this->handle ?? Str::snake($this->name),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $level = auth()->user()->role->level;

        if ($level < 1) $level = 1;

        return [
            'name'        => 'required',
            'handle'      => 'required',
            'guard_name'  => 'sometimes',
            'description' => 'sometimes',
            'level'       => 'sometimes|nullable|integer|between:'.$level.',99',
        ];
    }
}
