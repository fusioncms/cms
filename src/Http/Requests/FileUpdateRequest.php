<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class FileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
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
        $oldLocation = $this->file->location;
        $newLocation = "files/{$this->file->uuid}-{$this->name}.{$this->file->extension}";

        // Rename if necessary..
        if ($oldLocation !== $newLocation) {
            Storage::disk('public')->move($oldLocation, $newLocation);

            $this->merge(['location' => $newLocation]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'     => 'required',
            'title'    => 'sometimes',
            'alt'      => 'sometimes',
            'caption'  => 'sometimes',
            'location' => 'sometimes',
        ];
    }
}
