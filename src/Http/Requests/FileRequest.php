<?php

namespace Fusion\Http\Requests;

class FileRequest extends Request
{
    /**
     * Determine if the user is authorized to make a PATCH request.
     *
     * @return bool
     */
    public function authorizePatch()
    {
        return $this->user()->can('files.update');
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
            'disk_id'  => $disk->id,
            'location' => "files/{$this->file->uuid}-{$this->name}.{$this->file->extension}",
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
            'disk_id'  => 'required|integer',
            'name'     => 'required',
            'title'    => 'sometimes',
            'alt'      => 'sometimes',
            'caption'  => 'sometimes',
            'location' => 'sometimes',
        ];
    }
}
