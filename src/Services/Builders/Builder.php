<?php

namespace Fusion\Services\Builders;

use Fusion\Contracts\Builder as BuilderContract;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

abstract class Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $namespace;

    /**
     * @var array
     */
    protected $relationships = [];

    /**
     * Create a new Builder instance.
     */
    public function __construct()
    {
        if (empty($this->namespace)) {
            throw new Exception('Please specify your builder\'s base namespace.');
        }
    }

    /**
     * Make a new model instance.
     */
    abstract public function make();

    /**
     * Get the fully qualified class.
     *
     * @return string
     */
    public function getClass()
    {
        $handle = $this->collection;

        if ($this->type) {
            $handle .= '_'.$this->type;
        }

        $className = Str::studlyCase($handle);

        return $this->namespace.'\\'.$className;
    }

    /**
     * Set the root namespace.
     *
     * @param string $namespace
     *
     * @return self
     */
    public function setNamespace($namespace)
    {
        $this->namespace = $namespace;

        return $this;
    }

    /**
     * Get the root namespace.
     *
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * @return array
     */
    public function getTraitImportStatements()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getTraitUseStatements()
    {
        return [];
    }

    /**
     * @return array
     */
    public function getWith()
    {
        return [];
    }

    public function getReferences($fields)
    {
        $references = [
            'id',
            'matrix',
            'created_at',
            'updated_at',
        ];

        foreach ($fields as $field) {
            $references[] = $field->handle;
        }

        foreach ($this->getRelationships() as $relationship => $value) {
            $references[] = $relationship;
        }

        return $references;
    }

    /**
     * @return array
     */
    public function getDates()
    {
        return ['created_at', 'updated_at'];
    }

    /**
     * @return array
     */
    public function getRelationships()
    {
        return $this->relationships;
    }

    /**
     * @return bool
     */
    public function hasRelationships()
    {
        return count($this->getRelationships()) > 0;
    }

    /**
     * @return self
     */
    public function addRelationship($field, $type)
    {
        $this->relationships[$field->handle] = [
            $field,
            $type,
        ];

        return $this;
    }

    /**
     * @return string
     */
    public function generateRelationships()
    {
        if (!$this->hasRelationships()) {
            return '';
        }

        $relationships = $this->getRelationships();
        $generated     = '';

        foreach ($relationships as $handle => list($field, $fieldtype)) {
            $generated .= $fieldtype->generateRelationship($field)."\n\n";
        }

        return trim($generated);
    }
}
