<?php

namespace Fusion\Http\Requests;

use Illuminate\Support\Facades\Storage;

class DiskRequest extends Request
{
    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('disks.create');
    }

    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('disks.update');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->disk->id ?? null;

        return [
            'name'           => 'required',
            'handle'         => "required|unique:disks,handle,{$id}",
            'driver'         => 'required',
            'configurations' => 'required|array',
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($this->driver == 's3' and !app()->runningUnitTests()) {
                $this->testConnection($validator);
            }
        });
    }

    /**
     * Test that driver exists..
     * [Helper]
     * 
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    private function testConnection($validator)
    {
        rescue(function() {
            app('filesystem')
                ->createS3Driver($this->configurations)
                ->files('/');
        }, function($exception) use ($validator) {
            $validator->errors()->add('driver', $exception->getMessage());
        });
    }
}
