<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Matrix;
use Illuminate\Support\Str;

class MatrixFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $route;

    /**
     * @var string
     */
    protected $template;

    /**
     * @var bool
     */
    protected $asSingle = false;

    /**
     * @var bool
     */
    protected $asCollection = false;

    /**
     * Create a new Matrix factory.
     *
     * @return \Fusion\Models\Matrix
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['slug']   = Str::slug($this->name, '-');
            $overrides['handle'] = Str::slug($this->name, '_');
        }

        if ($this->route) {
            $overrides['route'] = $this->route;
        }

        if ($this->template) {
            $overrides['template'] = $this->template;
        }

        if ($this->asCollection) {
            $overrides['type'] = 'collection';
        }

        if ($this->asSingle) {
            $overrides['type'] = 'single';
        }

        $matrix = factory(Matrix::class)->create($overrides);

        return $matrix;
    }

    /**
     * Create a matrix with the given name.
     *
     * @param string $name
     *
     * @return \MatrixFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a matrix as a collection.
     *
     * @return \MatrixFactory
     */
    public function asCollection()
    {
        $this->asCollection = true;

        return $this;
    }

    /**
     * Create a matrix as a single.
     *
     * @return \MatrixFactory
     */
    public function asSingle()
    {
        $this->asSingle = true;

        return $this;
    }

    /**
     * Create a matrix with the given route.
     *
     * @param string $route
     *
     * @return \MatrixFactory
     */
    public function withRoute($route)
    {
        $this->route = $route;

        return $this;
    }

    /**
     * Create a matrix with the given template.
     *
     * @param string $template
     *
     * @return \MatrixFactory
     */
    public function withTemplate($template)
    {
        $this->template = $template;

        return $this;
    }
}
