<?php

namespace Fusion\Http\Requests;

class UploadFileRequest extends Request
{
    /**
     * Max file size upload limit.
     *
     * @var int
     */
    protected $maxFileSize;

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->maxFileSize = setting('files.file_size_upload_limit');
    }

    /**
     * Determine if the user is authorized to make a POST request.
     *
     * @return bool
     */
    public function authorizePost()
    {
        return $this->user()->can('files.create');
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'directory_id' => (int) $this->directory_id,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $maxKb = byte_converter($this->maxFileSize, 'MB', 'KB');

        return [
            'file'         => "required|file|max:{$maxKb}",
            'directory_id' => 'required',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'file.max' => "The file cannot be larger than {$this->maxFileSize}MB",
        ];
    }
}
