<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Fusion\Models\Navigation;

class NavigationRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('navigation.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('navigation.update');
    }

    /**
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Navigation::count() === 0) return 0.0;

        $last_order = Navigation::all()->max(function ($navigation) { return $navigation->order; });

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
        $id = $this->navigation->id ?? null;

        return [
            'name'        => 'required|regex:/^[A-z]/i',
            'handle'      => ['required', 'unique:navigation,handle,'.$id, new NotAReservedKeyword()],
            'description' => 'sometimes',
            'order'             => 'sometimes',
        ];
    }
}
