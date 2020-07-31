<?php

namespace Fusion\Services\Builders;

use Fusion\Contracts\Builder as BuilderContract;
use Fusion\Models\Section;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

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
     * @param string                  $uniqid
     * @param \Fusion\Models\Section  $section
     */
    public function __construct($uniqid, Section $section)
    {
        parent::__construct();

        $this->replicator = \Fusion\Models\Replicator::where('uniqid', $uniqid)->firstOrFail();
        $this->section    = $section;
    }

    /**
     * Make.
     */
    public function make()
    {
        $prefix = $this->replicator->handle;
        $suffix = $this->replicator->uniqid;
        $handle = "{$prefix}_{$this->section->handle}_{$suffix}";

        $className = Str::studly($handle);
        $fillable  = [ 'replicator_id', 'section_id' ];
        $casts     = [];
        $fields    = $this->section->fields ?? collect();

        $fields = $fields->reject(function ($field) {
            $fieldtype = fieldtypes()->get($field->type);

            if ($fieldtype->hasRelationship()) {
                $this->addRelationship($field, $fieldtype);
            }

            return is_null($fieldtype->column);
        });

        foreach ($fields as $field) {
            $fieldtype = fieldtypes()->get($field->type);
            $fillable[] = $field->handle;
            $casts[] = $field->handle.'\' => \''.$fieldtype->cast;
        }

        $path = fusion_path("/src/Models/Replicators/{$className}.php");
        $stub = File::get(fusion_path('/stubs/matrices/replicator.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{tableName}'     => str_handle("rp_{$handle}"),
            '{fillable}'      => '[\''.implode('\', \'', $fillable).'\']',
            '{casts}'         => '[\''.implode('\', \'', $casts).'\']',
            '{dates}'         => '[\''.implode('\', \'', $this->getDates()).'\']',
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make("{$this->namespace}\\{$className}");
    }

    /**
     * Static make method.
     * 
     * @param  string                  $uniqid
     * @param  \Fusion\Models\Section  $section
     * @return Builder       
     */
    public static function resolve($uniqid, $section)
    {
        return (new static($uniqid, $section))->make();
    }
}
