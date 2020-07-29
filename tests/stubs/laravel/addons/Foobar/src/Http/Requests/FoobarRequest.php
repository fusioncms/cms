<?php

namespace Addons\Foobar\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FoobarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('foobar.'.($this->method() === 'POST' ? 'create' : 'update'));
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
        $id = $this->foobar->id ?? null;

        return [
            'name'        => 'required',
            'handle'      => 'required|unique:foobars,handle,'.$id,
            'description' => 'sometimes',
            'status'      => 'required|boolean',
        ];
    }
}
