<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class DirectoryRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('directories.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('directories.update');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $disk = $this->route('disk');

        $this->merge([
            'disk_id'   => $this->disk->id,
            'parent_id' => $this->parent_id ?? 0,
            'slug'      => $this->slug ?? Str::slug($this->name),
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
            'disk_id'   => 'required|integer',
            'name'      => 'required',
            'parent_id' => 'required|integer',
            'slug'      => Rule::unique('directories')
                            ->ignore($this->id)
                            ->where(function ($query) {
                                return $query
                                    ->where('slug', $this->slug)
                                    ->where('parent_id', $this->parent_id);
                            }),
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
