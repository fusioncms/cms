<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BackupUploadRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('backups.create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file-upload' => 'required|file|mimes:zip',
        ];
    }
}
