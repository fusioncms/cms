<?php

namespace Fusion\Fieldtypes;

use Fusion\Http\Resources\FileResource;
use Fusion\Models\Directory;
use Fusion\Models\Field;
use Fusion\Models\File as FileModel;
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
        'directory' => false,
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
            $uploads   = request()->file($field->handle);
            $oldValues = $model->{$field->handle}->pluck('id');
            $newValues = collect();
            
            foreach ($uploads as $key => $file){
                foreach ((array) $field->settings['directory'] as $diskId => $data) {
                    if ($data['status']) {
                        $file = (new \Fusion\Services\FileUploader($file))
                            ->setDisk($diskId)
                            ->setDirectoryByPath($data['path'])
                            ->persist();

                        $newValues->put($file->id, [
                            'field_id' => $field->id,
                            'order'    => $key + 1
                        ]);
                    }
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
        return FileResource::collection($this->getValue($model, $field));
    }
}
