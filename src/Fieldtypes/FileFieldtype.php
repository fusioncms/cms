<?php

namespace Fusion\Fieldtypes;

use Fusion\Http\Resources\FileResource;
use Fusion\Models\Directory;
use Fusion\Models\Field;
use Fusion\Services\FileUploader;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class FileFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'File';

    /**
     * @var string
     */
    public $icon = 'file-alt';

    /**
     * @var string
     */
    public $description = 'A simple file-upload field.';

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\File';

    /**
     * @var array
     */
    public $settings = [
        'multiple'  => false,
        'accept'    => null,
        'directory' => [],  // Example: [{ _id: 1, disk: 1, path: 'foo/bar' }]
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.multiple'         => 'required|boolean',
        'settings.accept'           => 'nullable|numeric',
        'settings.directory.*.disk' => 'required',
        'settings.directory.*.path' => 'nullable|string',
    ];

    /**
     * Generate relationship methods for associated Model.
     *
     * @param Fusion\Models\Field $field
     *
     * @return string
     */
    public function generateRelationship($field)
    {
        $stub = File::get(fusion_path("/stubs/relationships/{$this->relationship}.stub"));

        return strtr($stub, [
            '{handle}'            => $field->handle,
            '{studly_handle}'     => Str::studly($field->handle),
            '{related_pivot_key}' => 'file_id',
            '{related_namespace}' => $this->namespace,
            '{related_table}'     => 'files_pivot',
            '{where_clause}'      => "->where('field_id', {$field->id})",
            '{order_clause}'      => "->orderBy('order')",
        ]);
    }

    /**
     * Update relationship data in storage.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return void
     */
    public function persistRelationship($model, Field $field)
    {
        if (request()->hasFile($field->handle)) {
            $files     = request()->file($field->handle);
			$oldValues = isset($model->{$field->handle}) ? $model->{$field->handle}->pluck('id') : [];
            $newValues = collect();

            foreach ($files as $key => $file) {
                foreach ((array) $field->settings['directory'] as $data) {
                    /**
                     * Create file record for every
                     *   disk/directory path.
                     */
                    $file = (new FileUploader($file))
                        ->setDisk($data['disk'])
                        ->setDirectoryByPath($data['path'])
                        ->persist();

                    $newValues->put($file->id, [
                        'field_id' => $field->id,
                        'order'    => $key + 1,
                    ]);
                }
            }

            // --
            $model->{$field->handle}()->detach($oldValues);
            $model->{$field->handle}()->attach($newValues);
        }
    }

    /**
     * Returns resource object of field.
     *
     * @param Illuminate\Eloquent\Model $model
     * @param Fusion\Models\Field       $field
     *
     * @return FileResource
     */
    public function getResource($model, Field $field)
    {
        return FileResource::collection($this->getValue($model, $field) ?? []);
    }
}
