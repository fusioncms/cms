<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\SecurePassword;
use Illuminate\Validation\Rule;
use Fusion\Models\User;

class UserRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('users.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('users.update') and $this->user()->level($this->user->role->level);
    }

    /**
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (User::count() === 0) return 0.0;

        $last_order = User::all()->max(function ($user) { return $user->order; });

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
                'status' => $this->status ?? true,
                'role'   => $this->role ? $this->role :
                    setting('users.default_user_role', 'user'),
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
        $id = $this->user->id ?? null;

        $rules = [
            'name'          => ['required'],
            'email'         => ['required', 'email', 'unique:users,email,'.$id],
            'role'          => ['sometimes', 'exists:roles,handle'],
            'status'        => ['sometimes', 'boolean'],
            'subscriptions' => 'sometimes',
            'order'           => 'sometimes',
        ];

        if ($this->method() == 'POST') {
            $rules['name'][]   = 'required';
            $rules['email'][]  = 'required';
        }

        if ($this->method() == 'PATCH') {
            $rules['name'][]   = 'sometimes';
            $rules['email'][]  = 'sometimes';
        }

        /**
         *  `Owner` role can only be assigned by user with
         *    existing `owner` role.
         */
        if (!$this->user()->hasRole('owner')) {
            array_push($rules['role'], Rule::notIn(['owner']));
        }

        /**
         * Passwords can only be updated by their user.
         */
        if ($this->isOwningUser()) {
            $rules['password']              = ['sometimes', new SecurePassword()];
            $rules['password_confirmation'] = 'required_with:password|same:password';
        }

        return $rules;
    }

    /**
     * Determine if requesting User is this User.
     *
     * @return bool
     */
    public function isOwningUser()
    {
        return $this->user && $this->user()->id == $this->user->id;
    }
}
