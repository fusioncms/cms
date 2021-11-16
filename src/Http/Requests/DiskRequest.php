<?php

namespace Fusion\Http\Requests;

use Fusion\Models\Disk;

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
     * Helper function to find the last order
     *
     * @return float
     */
    public function orderLast()
    {
        if (Disk::count() === 0) return 0.0;

        $last_order = Disk::all()->max(function ($disk) { return $disk->order; });

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
            'order'         => $this->disk->order ?? $this->orderLast(),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $id = $this->disk->id ?? null;

        $rules = [
            'name'           => 'required',
            'handle'         => "required|unique:disks,handle,{$id}",
            'driver'         => 'required',
            'order'             => 'sometimes',
        ];

        switch ($this->driver) {
            case 'local':
                $rules['configurations.root'] = 'required';
                break;
            case 's3':
                $rules['configurations.key']    = 'required';
                $rules['configurations.secret'] = 'required';
                $rules['configurations.region'] = 'required';
                $rules['configurations.bucket'] = 'required';
                break;
            case 'ftp':
                $rules['configurations.host']     = 'required';
                $rules['configurations.username'] = 'required';
                $rules['configurations.password'] = 'required';
                break;
            case 'sftp':
                $rules['configurations.host']       = 'required';
                $rules['configurations.username']   = 'required';
                $rules['configurations.password']   = 'required_without:configurations.privateKey';
                $rules['configurations.privateKey'] = 'required_without:configurations.password';
                break;
        }

        return $rules;
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'configurations.root'       => 'root path',
            'configurations.key'        => 'key',
            'configurations.secret'     => 'secret',
            'configurations.region'     => 'region',
            'configurations.bucket'     => 'bucket',
            'configurations.host'       => 'host',
            'configurations.username'   => 'username',
            'configurations.password'   => 'password',
            'configurations.privateKey' => 'private key',
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
            if ($this->driver == 's3' and !app()->runningUnitTests()) {
                $this->testConnection($validator);
            }
        });
    }

    /**
     * Test that driver exists..
     * [Helper].
     *
     * @param \Illuminate\Validation\Validator $validator
     *
     * @return void
     */
    private function testConnection($validator)
    {
        rescue(function () {
            app('filesystem')
                ->createS3Driver($this->configurations)
                ->files('/');
        }, function ($exception) use ($validator) {
            $validator->errors()->add('driver', $exception->getMessage());
        });
    }
}
