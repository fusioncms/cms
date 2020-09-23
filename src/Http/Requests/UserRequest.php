<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\SecurePassword;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('users.'.
            ($this->method() === 'POST' ? 'create' : 'update'));
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'status' => $this->status ?? true,
            'role'   => $this->role ? $this->role :
                setting('users.default_user_role', 'user'),
        ]);
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
            'name'   => 'required',
            'email'  => 'required|email|unique:users,email,'.$id,
            'role'   => ['sometimes', 'exists:roles,name'],
            'status' => 'sometimes|boolean',
        ];

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
