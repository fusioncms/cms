<?php

namespace Fusion\Http\Requests;

use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Support\Str;
use Fusion\Models\Form;

class FormRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('forms.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('forms.update');
    }

    /**
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Form::count() === 0) return 0.0;

        $last_order = Form::all()->max(function ($form) { return $form->order; });

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
            'slug' => $this->slug ?? Str::slug($this->name),
            'order'         => $this->form->order ?? $this->orderLast(),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->form->id ?? null;

        return [
            'name'                    => 'required|regex:/^[A-z]/i',
            'handle'                  => ['required', 'unique:forms,handle,'.$id, new NotAReservedKeyword()],
            'slug'                    => 'required|unique:forms,slug,'.$id,
            'description'             => 'sometimes',
            'collect_email_addresses' => 'sometimes',
            'collect_ip_addresses'    => 'sometimes',
            'response_receipt'        => 'sometimes',

            'order'                        => 'sometimes',
            'confirmation_message'    => 'sometimes',
            'redirect_on_submission'  => 'sometimes',
            'redirect_url'            => 'sometimes',

            'enable_recaptcha'        => 'sometimes',
            'enable_honeypot'         => 'sometimes',

            'send_to'                 => 'sometimes',
            'reply_to'                => 'sometimes',

            'form_template'           => 'sometimes',
            'thankyou_template'       => 'sometimes',

            'status'                  => 'required',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param \Illuminate\Validation\Validator $validator
     *
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->has('slug')) {
                $validator->errors()->add('name', 'The name has already been taken.');
            }
        });
    }
}
