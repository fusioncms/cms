<?php

namespace Fusion\Http\Requests;
use Fusion\Models\Script;

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
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Script::count() === 0) return 0.0;

        $last_order = Script::all()->max(function ($script) { return $script->order; });

        return $last_order + 1.0;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'order'         => $this->order ?? $this->orderLast(),
        ]);
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
