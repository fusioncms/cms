<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;

class FieldsetRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('fieldsets.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('fieldsets.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->fieldset->id ?? null;

        return [
            'name'   => 'required|regex:/^[A-z]/i',
            'handle' => ['required', 'unique:fieldsets,handle,'.$id, new NotAReservedKeyword()],
        ];
    }
}
