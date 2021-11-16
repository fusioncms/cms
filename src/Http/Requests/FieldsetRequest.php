<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Fusion\Models\Fieldset;

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
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Fieldset::count() === 0) return 0.0;

        $last_order = Fieldset::all()->max(function ($fieldset) { return $fieldset->order; });

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
            'order'         => $this->fieldset->order ?? $this->orderLast(),
        ]);
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
            'order'             => 'sometimes',
        ];
    }
}
