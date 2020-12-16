<?php

namespace Fusion\Services\Builders;

use Fusion\Contracts\Structure;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;

abstract class Builder
{
    /**
     * Building Model.
     * 
     * @var \Fusion\Database\Eloquent\Model
     */
    protected $source;

    /**
     * Column Fields.
     * 
     * @var array
     */
    protected $columns = [];

    /**
     * Relationship Fields.
     * 
     * @var array
     */
    protected $relationships = [];

    /**
     * Generate & return fresh builder instance.
     * 
     * @return \Fusion\Database\Eloquent\Model
     */
    public function refresh()
    {
        // clear..
        $this->columns       = [];
        $this->relationships = [];

        // prepare fields..
        $this->generateFields();

        $fillable = [];
        $casts    = [];

        foreach ($this->columns as $column) {
            $fillable[] = $column->handle;
            $casts[$column->handle] = $column->type()->cast;
        }

        $fillable = array_merge($this->getFillable(), $fillable);
        $casts    = array_merge($this->getCasts(), $casts);
        
        $template  =  File::get($this->getStubPath());
        $buildPath = $this->getBuildPath();

        // Generate builder class file..
        File::put($buildPath, strtr($template,
            array_merge([
                '{class}'         => $this->getBuildName(),
                '{table}'         => $this->getBuildTable(),
                '{slug}'          => $this->source->slug,
                '{handle}'        => $this->source->handle,
                '{fillable}'      => $this->toString($fillable),
                '{casts}'         => $this->toString($casts),
                '{relationships}' => $this->generateRelationships(),
            ], $this->getPlaceholders()))
        );

        return app()->make($this->getNamespace());
    }

    /**
     * Resolve builder instance.
     * 
     * @return \Fusion\Database\Eloquent\Model
     */
    public function make()
    {
        $namespace = $this->getNamespace();

        if (!class_exists($namespace, false)) {
            return $this->refresh();
        }

        return app()->make($namespace);
    }

    /**
     * Get table name of Builder Model.
     * 
     * @return string
     */
    public function getBuildTable()
    {
        $prefix = static::prefix();

        if (is_null($prefix)) {
            $prefix = Str::lower($this->source->getClassName());
        }

        return "{$prefix}_{$this->source->handle}";
    }

    /**
     * Return builder stub file path.
     * 
     * @return string
     */
    protected function getStubPath()
    {
        $name = Str::lower($this->source->getClassName());
        $path = fusion_path("/stubs/builders/{$name}.stub");
        
        return $path;
    }

    /**
     * Return builder class name.
     * 
     * @return string
     */
    protected function getBuildName()
    {
        return Str::studly($this->source->handle);
    }

    /**
     * Return builder folder name.
     * 
     * @return string
     */
    protected function getBuildFolder()
    {
        return Str::of($this->source->getClassName())
            ->lower()
            ->plural()
            ->ucfirst()
            ->__toString();
    }

    /**
     * Return build path.
     * 
     * @return string
     */
    protected function getBuildPath()
    {
        return fusion_path("/src/Models/{$this->getBuildFolder()}/{$this->getBuildName()}.php");
    }

    /**
     * Return builder namespace.
     * 
     * @return string
     */
    protected function getNamespace()
    {
        return "Fusion\\Models\\{$this->getBuildFolder()}\\{$this->getBuildName()}";
    }

    /**
     * Mass assignment protection.
     * 
     * @var array
     */
    protected function getFillable()
    {
        return [];
    }

    /**
     * Attribute casting.
     * 
     * @var array
     */
    protected function getCasts()
    {
        return [];
    }

    /**
     * Add addl placeholders to merge into
     * your builder stub file.
     * 
     * @return array
     */
    protected function getPlaceholders()
    {
        return [];
    }

    /**
     * Returns relationship content.
     *
     * @access private
     * @return string
     */
    private function generateRelationships()
    {
        $generated = collect($this->relationships)->reduce(function ($carry, $field) {
            return $carry . $field->type()->generateRelationship($field)."\n\n";
        }, '');

        return trim($generated);
    }

    /**
     * Separates column/relationship-based fields.
     * 
     * @access private
     * @return void
     */
    private function generateFields()
    {
        if ($this->source instanceof Structure) {

            $this->source->fields->each(function ($field) {
                $fieldtype = $field->type();

                if ($fieldtype->hasRelationship()) {
                    $this->relationships[$field->handle] = $field;
                } else {
                    $this->columns[$field->handle] = $field;
                }
            });
        }
    }

    /**
     * Convert array to string format.
     *
     * @access private
     * @param  array $arr
     * @return string|null
     */
    private function toString($arr)
    {
        if (empty($arr)) {
            return null;
        }

        return collect($arr)->map(function ($v, $k) {
            if (is_numeric($k)) {
                return sprintf("'%s'", $v);
            } else {
                return sprintf("'%s' => '%s'", $k, $v);
            }
        })->implode(",");
    }

    /**
     * Static refresh method.
     * 
     * @return \Fusion\Database\Eloquent\Model
     */
    public static function fresh(...$args)
    {
        return (new static(...$args))->refresh();
    }

    /**
     * Static make method.
     * 
     * @return \Fusion\Database\Eloquent\Model
     */
    public static function resolve(...$args)
    {
        return (new static(...$args))->make();
    }

    /**
     * Builder table prefix.
     * 
     * @var string
     */
    abstract static function prefix();
}
