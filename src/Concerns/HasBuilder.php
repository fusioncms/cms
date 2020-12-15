<?php

namespace Fusion\Concerns;

trait HasBuilder
{
    /**
     * Get the builder's table name.
     *
     * @return string
     */
    public function getBuilderTable()
    {
        $id     = strtolower($this->getClassName());
        $prefix = config("fusion.builders.{$id}.prefix");

        return "{$prefix}_{$this->handle}";
    }

    /**
     * Get the builder namespace.
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilderNamespace()
    {
        return get_class($this->getBuilder());
    }

    /**
     * Get the builder instance.
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder()
    {
        $id      = strtolower($this->getClassName());
        $builder = config("fusion.builders.{$id}.namespace");

        return (new $builder($this->handle))->make();
    }

    /**
     * Get the builder instance.
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function refreshBuilder()
    {
        $id      = strtolower($this->getClassName());
        $builder = config("fusion.builders.{$id}.namepsace");

        return (new $builder($this->handle))->refresh();
    }
}
