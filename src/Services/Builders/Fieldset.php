<?php

namespace Fusion\Services\Builders;

use Fusion\Contracts\Builder as BuilderContract;
use Fusion\Models\Fieldset as FieldsetModel;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Fieldset extends Builder implements BuilderContract
{
    /**
     * @var Fusion\Models\Fieldset
     */
    protected $fieldset;

    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Fieldset';

    protected $model;

    /**
     * Create a new Fieldset instance.
     *
     * @param string $handle
     */
    public function __construct($handle)
    {
        parent::__construct();

        $this->fieldset = FieldsetModel::where('handle', $handle)->firstOrFail();
        $this->model    = $this->make();
    }

    /**
     * Make a new Fielset instance.
     */
    public function make()
    {
        $className = Str::studly($this->fieldset->handle);
        $traits    = [];
        $fillable  = ['fieldset_id', 'name', 'handle', 'status'];
        $casts     = ['status' => 'boolean'];
        $fields    = [];

        $fields = $this->fieldset->fields->reject(function ($field) {
            $fieldtype = fieldtypes()->get($field->type);

            if ($fieldtype->hasRelationship()) {
                $this->addRelationship($field, $fieldtype);
            }

            return is_null($fieldtype->column);
        });

        foreach ($fields as $field) {
            $fieldtype  = fieldtypes()->get($field->type);
            $fillable[] = $field->handle;
            $casts[]    = $field->handle.'\' => \''.$fieldtype->cast;
        }

        $path = fusion_path("/src/Models/Fieldsets/{$className}.php");
        $stub = File::get(fusion_path('/stubs/matrices/fieldset.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{fieldset_id}'   => $this->fieldset->id,
            '{handle}'        => $this->fieldset->handle,
            '{fillable}'      => '[\''.implode('\', \'', $fillable).'\']',
            '{casts}'         => '[\''.implode('\', \'', $casts).'\']',
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make("Fusion\Models\Fielsets\{$className}");
    }

    /**
     * Get the Fielset instance.
     */
    public function get()
    {
        return $this->model
            ->where('fieldset_id', $this->fieldset->id)
            ->firstOrCreate([
                'fieldset_id' => $this->fieldset->id
            ]);
    }
}
