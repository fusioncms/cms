<?php

use Facades\SectionFactory;
use Fusion\Contracts\Factory;
use Fusion\Models\Blueprint;
use Illuminate\Support\Str;

class BlueprintFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var \Fusion\Models\Section
     */
    protected $sections;

    /**
     * Create a new Blueprint factory.
     *
     * @return \Fusion\Models\Blueprint
     */
    public function create()
    {
        $blueprint = factory(Blueprint::class)->create();

        if ($this->name) {
            $overrides['name']   = $this->name;
        }

        if (!$this->sections) {
            $this->sections = SectionFactory::times(3)->create();
        }

        $blueprint->sections()->saveMany($this->sections);

        return $blueprint;
    }

    /**
     * Set blueprint name.
     *
     * @param string $name
     *
     * @return \BlueprintFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a blueprint with the given sections.
     *
     * @param array|\Illuminate\Support\Collection $sections
     *
     * @return \BlueprintFactory
     */
    public function withSections($sections)
    {
        $this->sections = $sections;

        return $this;
    }
}