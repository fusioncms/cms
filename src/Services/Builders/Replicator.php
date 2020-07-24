<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Section;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use Fusion\Contracts\Builder as BuilderContract;

class Replicator extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Replicators';

    /**
     * @var \Fusion\Models\Replicator
     */
    protected $replicator;

    /**
     * Constructor.
     * 
     * @param string  $handle
     * @param Section $section
     */
    public function __construct(string $handle, Section $section)
    {
        parent::__construct();

        $this->replicator = \Fusion\Models\Replicator::where('handle', $handle)->firstOrFail();
        $this->section    = $section;
    }

    /**
     * Make.
     */
    public function make()
    {
        $prefix = $this->replicator->field->handle;
        $middle = $this->section->handle;
        $suffix = $this->replicator->uniqid;

        $handleName = "{$prefix}_{$middle}_{$suffix}";
        $className  = Str::studly("{$prefix}_{$middle}_{$suffix}");
        $fillable   = [ 'replicator_id' ];
        $casts      = [];
        $fields     = $this->section->fields ?? collect();

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

        $path = fusion_path("/src/Models/Replicators/{$className}.php");
        $stub = File::get(fusion_path('/stubs/matrices/replicator.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $handleName,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make("{$this->namespace}\\{$className}");
    }

    /**
     * Static make method.
     * 
     * @param  string  $handle
     * @param  Section $section
     * @return Builder       
     */
    public static function resolve(string $handle, Section $section)
    {
        return (new static($handle, $section))->make();
    }
}
