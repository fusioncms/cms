<?php

use Fusion\Models\Fieldset;
use Fusion\Contracts\Factory;

class FieldsetFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var array
     */
    protected $fields;

    /**
     * Create a new Fieldset factory.
     *
     * @return \Fusion\Models\Fieldset
     */
    public function create()
    {
        $fieldset = factory(Fieldset::class)->create([
            'name' => $this->name
        ]);
dd($fieldset);
        $fieldset->fields()->createMany($this->fields);

        return $fieldset;
    }

    /**
     * Set fieldset name.
     *
     * @param string $name
     *
     * @return \FieldsetFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a fieldset with the given fields.
     *
     * @param array $fields
     *
     * @return \FieldsetFactory
     */
    public function withFields(array $fields)
    {
        $this->fields = $fields;

        return $this;
    }
}
