<?php

namespace Fusion\Http\Requests;

use Exception;
use Fusion\Rules\NotAReservedKeyword;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Validation\ValidationException;

class FieldRequest extends Request
{
    /**
     * @var \Fusion\Models\Field
     */
    protected $fieldtype;

    /**
     * Create a new instance.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function __construct(HttpRequest $request)
    {
        try {
            $this->fieldtype = fieldtypes()->get($request->type['handle']);
        } catch (Exception $e) {
            throw ValidationException::withMessages(['type' => $e->getMessage()]);
        }
    }

    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('blueprints.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('blueprints.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'handle' => $this->handle ?? str_handle($this->name),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'   => 'required|regex:/^[A-z]/i',
            'type'   => 'required',
            'handle' => ['required', 'not_regex:/[^a-z0-9_]/i', new NotAReservedKeyword()],
        ] + $this->fieldtype->rules;
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return $this->fieldtype->attributes;
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'handle.not_regex' => 'Handle must contain only letters, numbers, and underscores.',
        ] + $this->fieldtype->messages;
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $this->fieldtype->onPostFieldRequest($validator);
    }
}
