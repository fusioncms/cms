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
        return [
            'name'           => 'required',
            'handle'         => 'required',
            'driver'         => 'required',
            'is_default'     => 'sometimes|boolean',
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
            // $this->testConnection($validator);
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
            $disks = config('filesystems.disks');

            config(["filesystems.disks.{$this->handle}" =>
                $this->configurations + ['driver' => $this->driver]]);

            Storage::disk($this->handle);

            // revert..
            config(['filesystems.disks' => $disks]);
        }, function($e) use ($validator) {
            $validator->errors()->add('driver', $e->getMessage());
        });
    }
}
