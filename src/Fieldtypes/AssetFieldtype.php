<?php

namespace Fusion\Fieldtypes;

use File;
use Fusion\Http\Resources\FileResource;
use Fusion\Models\Field;
use Illuminate\Support\Str;

class AssetFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Asset';

    /**
     * @var string
     */
    public $icon = 'folder-open';

    /**
     * @var string
     */
    public $description = 'A set of assets';

    /**
     * @var string
     */
    public $relationship = 'morphToMany';

    /**
     * @var array
     */
    public $settings = [
        'limit'                 => 0,
        'disk'                  => 1,
        'directory'             => 0,
        'filetype_restrictions' => [],
        'allow_navigation'      => true,
        'allow_uploads'         => true,
    ];

    /**
     * Field setting validation rules (FieldRequest).
     *
     * @var array
     */
    public $rules = [
        'settings.limit'                 => 'nullable|integer',
        'settings.disk'                  => 'required|integer',
        'settings.directory'             => 'nullable|integer',
        'settings.filetype_restrictions' => 'nullable',
        'settings.allow_navigation'      => 'required|boolean',
        'settings.allow_uploads'         => 'required|boolean',
    ];

    /**
     * @var array
     */
    public $validation = [];  // no validation

    /**
     * @var string
     */
    public $namespace = 'Fusion\Models\File';

    /**
     * @var mixed
     */
    protected $default = [];

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
        $oldValues = isset($model->{$field->handle}) ? $model->{$field->handle}->pluck('id') : [];
        $newValues = collect(request()->input($field->handle))->mapWithKeys(function ($item, $key) use ($field) {
            return [
                $item['id'] => [
                    'field_id' => $field->id,
                    'order'    => $key + 1,
                ], ];
        });

        $model->{$field->handle}()->detach($oldValues);
        $model->{$field->handle}()->attach($newValues);
        $model->flush();
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
