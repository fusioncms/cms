<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\SecurePassword;
use Illuminate\Validation\Rule;

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
            'name'   => [],
            'email'  => ['email', 'unique:users,email,'.$id],
            'role'   => ['sometimes', 'exists:roles,handle'],
            'status' => ['sometimes', 'boolean'],
            'subscriptions' => 'sometimes',
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
