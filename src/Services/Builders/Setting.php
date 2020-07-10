<?php

namespace Fusion\Services\Builders;

use Illuminate\Support\Str;
use Fusion\Models\Setting as SettingGroup;
use Illuminate\Support\Facades\File;
use Fusion\Services\Setting as SettingService;
use Fusion\Contracts\Builder as BuilderContract;

class Setting extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Settings';

    /**
     * @var \Fusion\Models\Setting
     */
    protected $setting;

    /**
     * @var \Fusion\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Constructor.
     * 
     * @param string $handle
     */
    public function __construct(string $handle)
    {
        parent::__construct();

        $this->setting = SettingGroup::where('handle', $handle)->firstOrFail();
        $this->model   = $this->make();
    }

    /**
     * Make.
     */
    public function make()
    {
        $className = Str::studly($this->setting->handle);
        $fillable  = [ 'setting_id' ];
        $casts     = [];
        $fields    = $this->setting->fieldset->fields ?? collect();

        $fields = $fields->reject(function ($field) {
            $fieldtype = fieldtypes()->get($field->type);

            if ($fieldtype->hasRelationship()) {
                $this->addRelationship($field, $fieldtype);
            }

            return is_null($fieldtype->column);
        });

        foreach ($fields as $field) {
            $fieldtype  = fieldtypes()->get($field->type);
            $fillable[] = $field->handle;
            $casts[]    = $field->handle . '\' => \'' . $fieldtype->cast ;
        }

        $path = fusion_path("/src/Models/Settings/{$className}.php");
        $stub = File::get(fusion_path('/stubs/matrices/setting.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->setting->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make("{$this->namespace}\\{$className}");
    }
}
