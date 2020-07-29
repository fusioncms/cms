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
        'directory' => null,
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
            $files = request()->file($field->handle);
            $directory = Directory::firstOrCreate([
                'name' => ($name = $field->settings['directory'] ?? 'uploads'),
                'slug' => Str::slug($name),
            ]);

            $oldValues = $model->{$field->handle}->pluck('id');
            $newValues = collect($files)
                ->mapWithKeys(function ($file, $key) use ($field, $directory) {
                    $uuid = unique_id();
                    $name = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
                    $extension = $file->extension();
                    $bytes = $file->getSize();
                    $mimetype = $file->getClientMimeType();
                    $filetype = strtok($mimetype, '/');
                    $location = "files/{$uuid}-{$name}.{$extension}";

                    Storage::disk('public')->putFileAs('', $file, $location);

                    if ($filetype == 'image') {
                        list($width, $height) = getimagesize($file);
                    }

                    $model = FileModel::create([
                        'directory_id' => $directory->id,
                        'uuid'         => $uuid,
                        'name'         => $name,
                        'extension'    => $extension,
                        'bytes'        => $bytes,
                        'mimetype'     => $mimetype,
                        'location'     => $location,
                        'width'        => $width ?? null,
                        'height'       => $height ?? null,
                    ]);

                    return [$model['id'] => [
                        'field_id' => $field->id,
                        'order'    => $key + 1,
                    ]];
                });

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
