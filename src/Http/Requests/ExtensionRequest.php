<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Foundation\Http\FormRequest;

class ExtensionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->hasRole('owner');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->extension->id ?? null;

        return [
            'name'   => 'required|regex:/^[A-z]/i',
            'handle' => [ 'required', 'unique:extensions,handle,' . $id, new NotAReservedKeyword ],
        ];
    }
}
