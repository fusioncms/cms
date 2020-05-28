<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MailableRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('mailables.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->mailable->id ?? null;

        return [
            'name'     => 'required',
            'handle'   => 'required|unique:mailables,id,' . $id,
            'markdown' => 'required'
        ];
    }
}
