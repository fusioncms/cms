<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Field;

class FieldFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var string
     */
    protected $type;

    /**
     * @var array
     */
    protected $settings;

    /**
     * Create a new Field factory.
     */
    public function create()
    {
        $overrides = [];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = str_handle($this->name);
        }

        if ($this->type) {
            $overrides['type'] = $this->type;
        }

        if ($this->settings) {
            $overrides['settings'] = $this->settings;
        }

        $field = factory(Field::class)->create($overrides);

        return $field;
    }

    /**
     * Create a field with the given name.
     *
     * @param string $name
     *
     * @return \FieldFactory
     */
    public function withName(string $name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a field with the given type.
     *
     * @param string $type
     *
     * @return \FieldFactory
     */
    public function withType(string $type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Create a field with the given settings.
     *
     * @param array $settings
     *
     * @return \FieldFactory
     */
    public function withSettings(array $settings)
    {
        $this->settings = $settings;

        return $this;
    }
}
