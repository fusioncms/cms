<?php

namespace Modules\BetaModule\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BetaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('beta.' . ($this->method() === 'POST' ? 'create' : 'update'));
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
        $id = $this->betum->id ?? null;

        return [
            'name'        => 'required',
            'handle'      => 'required|unique:betas,handle,' . $id,
            'description' => 'sometimes',
            'status'      => 'required|boolean',
        ];
    }
}
