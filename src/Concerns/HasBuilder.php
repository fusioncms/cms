<?php

namespace Fusion\Concerns;

use Illuminate\Support\Str;

trait HasBuilder
{
    /**
     * Get the Building Model name.
     *
     * @return string
     */
    public function getClassName()
    {
        return class_basename($this);
    }

    /**
     * Get the Builder Model's namespace.
     *
     * @return string
     */
    public function getBuilderModelNamespace()
    {
        return get_class($this->getBuilder());
    }

    /**
     * Get the Builder Class/Model table name.
     * (i.e. `mx_pages`)
     * 
     * @return string
     */
    public function getBuilderTable()
    {
        $namespace = $this->getBuilderNamespace();
        $prefix    = $namespace::prefix();

        return "{$prefix}_{$this->handle}";
    }

    /**
     * Get the builder instance.
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder()
    {
        $namespace = $this->getBuilderNamespace();

        return $namespace::resolve($this->handle);
    }

    /**
     * Get the builder instance.
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function refreshBuilder()
    {
        $namespace = $this->getBuilderNamespace();

        return $namespace::fresh($this->handle);
    }

    /**
     * Get the Builder Class namespace.
     *
     * @access private
     * @return string
     */
    private function getBuilderNamespace()
    {
        return "Fusion\\Services\\Builders\\{$this->getClassName()}";
    }
}
