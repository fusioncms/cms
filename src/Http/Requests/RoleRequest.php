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
        if ($this->method() === 'POST') {
            return $this->user()->can('roles.create');
        }

        return $this->user()->can('roles.update') and $this->user()->level($this->role->level);
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        if ($this->method() == 'POST') {
            $this->merge([
                'name'   => $this->name,
                'handle' => $this->handle ?? Str::snake($this->name),
            ]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // Fetch the user's current level.
        $level = auth()->user()->role->level;

        // Cannot assign a level lower than 1,
        // 0 is reserved for the owner role.
        if ($level < 1) $level = 1;

        $rules = [
            'name'        => 'sometimes',
            'handle'      => 'sometimes',
            'guard_name'  => 'sometimes',
            'description' => 'sometimes',
            'level'       => 'sometimes|nullable|integer|between:'.$level.',99',
        ];

        if ($this->method() == 'POST') {
            $rules['name']   = 'required';
            $rules['handle'] = 'required';
        }

        return $rules;
    }
}
