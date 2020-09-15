<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Navigation;
use Illuminate\Support\Str;

class NavigationFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var array
     */
    protected $sections;

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

        if ($this->sections) {
            foreach ($this->sections as $data) {
                $section = $navigation->blueprint->sections()->create([
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
     * Add sections to the navigation.
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
