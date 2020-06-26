<?php

namespace Fusion\Http\Requests;

use ZipArchive;
use Fusion\Rules\ValidAddon;
use Illuminate\Foundation\Http\FormRequest;

class AddonUploadRequest extends FormRequest
{
    /**
     * @var \ZipArchive
     */
    protected $zipArchive;

    /**
     * @var array
     */
    protected $acceptedMimes = ['zip'];

    /**
     * Create a new AddonUploadRequest instance.
     *
     * @param  \ZipArchive  $zipArchive
     */
    public function __construct(ZipArchive $zipArchive)
    {
        $this->zipArchive = $zipArchive;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('addons.create');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'file-upload' => [
                'required',
                'file',
                'mimes:' . implode(',', $this->acceptedMimes),
                new ValidAddon($this->zipArchive),
            ]
        ];
    }
}
