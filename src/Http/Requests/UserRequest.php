<?php

namespace Fusion\Http\Requests;

use Illuminate\Validation\Rule;
use Fusion\Rules\SecurePassword;
use Illuminate\Foundation\Http\FormRequest;

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
            'name'              => 'required',
            'email'             => 'required|email|unique:users,email,'.$id,
            'role'              => ['sometimes','exists:roles,name'],
            'status'            => 'sometimes|boolean',
            'email_verified_at' => 'sometimes|required',
        ];

        /**
         *  Requesting user must be `owner` to re-assign this role.
         */
        if (! $this->user()->hasRole('owner')) {
            array_push($rules['role'], Rule::notIn(['owner']));
        }

        /**
         * Admins can update their own password.
         */
        if ($this->method() === 'PATCH') {
            if ($this->user()->id == $this->user->id) {
                $rules['password'] = ['sometimes', new SecurePassword()];
                $rules['password_confirmation'] = 'required_with:password|same:password';
            }
        }

        return $rules;
    }
}
