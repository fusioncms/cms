<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Fusion\Models\Role;

class RoleRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('roles.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('roles.update') and $this->user()->level($this->role->level);
    }

    /**
     * Determine if the user is authorized to make a DELETE request.
     *
     * @return bool
     */
    public function authorizeDelete()
    {
        return $this->user()->can('roles.delete') and $this->user()->level($this->role->level);
    }

    /**
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Role::count() === 0) return 0.0;

        $last_order = Role::all()->max(function ($role) { return $role->order; });

        return $last_order + 1.0;
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
                'order'         => $this->order ?? $this->orderLast(),
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
        if ($level < 1) {
            $level = 1;
        }

        $rules = [
            'name'        => 'sometimes',
            'handle'      => 'sometimes',
            'guard_name'  => 'sometimes',
            'description' => 'sometimes',
            'level'       => 'sometimes|nullable|integer|between:'.$level.',99',
            'order'             => 'sometimes',
        ];

        if ($this->method() == 'POST') {
            $rules['name']   = 'required';
            $rules['handle'] = 'required';
        }

        return $rules;
    }
}
