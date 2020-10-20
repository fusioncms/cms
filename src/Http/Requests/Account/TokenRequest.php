<?php

namespace Fusion\Http\Requests\Account;

use Fusion\Http\Requests\Request;

class TokenRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->id == auth()->user()->id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'      => 'required|unique:personal_access_tokens,name',
            'abilities' => 'sometimes|array',
        ];
    }
}
