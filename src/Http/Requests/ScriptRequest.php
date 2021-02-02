<?php

namespace Fusion\Http\Requests;

class ScriptRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('scripts.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('scripts.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->script->id ?? null;

        return [
            'name'          => 'required',
            'description'   => 'sometimes',
            'code'          => 'required',
            'location'      => 'required',
            'trigger_on'    => 'required',
            'trigger_where' => 'sometimes',
            'type'          => 'required',
            'order'         => 'sometimes',
            'status'        => 'required',
        ];
    }
}
