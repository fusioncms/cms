<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;

class TaxonomyFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * For applying factory states..
     *
     * @var array
     */
    protected $states;

    /**
     * @var array
     */
    protected $sections;

    /**
     * Create a new Taxonomy factory.
     *
     * @return \Fusion\Models\Taxonomy
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = str_handle($this->name);
            $overrides['slug']   = Str::slug($this->name);
        }

        if ($this->states) {
            $taxonomy = factory(Taxonomy::class)->states($this->states)->create($overrides);
        } else {
            $taxonomy = factory(Taxonomy::class)->create($overrides);
        }

        if ($this->sections) {
            foreach ($this->sections as $data) {
                $section = $taxonomy->blueprint->sections()->create([
                    'name'   => $data['name'],
                    'handle' => $data['handle'],
                ]);

                foreach ($data['fields'] as $field) {
                    $section->fields()->create([
                        'name'   => $field['name'],
                        'handle' => $field['handle'],
                        'type'   => $field['type'],
                    ]);
                }
            }
        }

        return $taxonomy;
    }

    /**
     * Create a taxonomy with the given name.
     *
     * @param string $name
     *
     * @return \TaxonomyFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Add states to the taxonomy.
     *
     * @param array $states
     *
     * @return \TaxonomyFactory
     */
    public function withStates(array $states)
    {
        $this->states = $states;

        return $this;
    }

    /**
     * Add sections to the taxonomy.
     *
     * @param array $sections
     *
     * @return \TaxonomyFactory
     */
    public function withSections($sections)
    {
        $this->sections = $sections;

        return $this;
    }
}
