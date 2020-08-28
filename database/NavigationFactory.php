<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Fieldset;
use Fusion\Models\Navigation;
use Illuminate\Support\Str;

class NavigationFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var \Fusion\Models\Fieldset
     */
    protected $fieldset;

    /**
     * Create a new Navigation factory.
     *
     * @return \Fusion\Models\Navigation
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = Str::snake($this->name);
        }

        $navigation = factory(Navigation::class)->create($overrides);

        return $navigation;
    }

    /**
     * Create a form with the given name.
     *
     * @param string $name
     *
     * @return \NavigationFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a form with the given fieldset.
     *
     * @param \Fusion\Models\Fieldset $fieldset
     *
     * @return \NavigationFactory
     */
    public function withFieldset(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;

        return $this;
    }
}
