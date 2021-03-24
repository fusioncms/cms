<?php

namespace Acme\Myaddon\Http\Requests;

use Fusion\Http\Requests\Request;
use Fusion\Rules\NotAReservedKeyword;

class AcmeRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('acme.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('acme.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = request()->id;

        return [
            'name'   => 'required',
            'slug'   => 'required|unique:acme,slug,'.$id,
            'handle' => ['required', 'unique:acme,handle,'.$id, new NotAReservedKeyword()],
        ];
    }
}
