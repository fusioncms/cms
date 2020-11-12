<?php

use Fusion\Models\Section;
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
     * @var \Fusion\Models\Section
     */
    protected $section;

    /**
     * Create a new Fieldset factory.
     *
     * @return \Fusion\Models\Fieldset
     */
    public function create()
    {
        $fieldset = factory(Fieldset::class)->create([
            'name'   => $this->name,
            'handle' => $this->name ? str_handle($this->name) : null,
        ]);

        if (!$this->section) {
            $this->section = SectionFactory::times(1)->create();
        }

        if (!empty($this->fields)) {
            $this->section->fields()->createMany($this->fields);
        }

        $fieldset->sections()->save($this->section);

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

    /**
     * Create a blueprint with the given sections.
     *
     * @param \Fusion\Models\Section $section
     *
     * @return \FieldsetFactory
     */
    public function withSection(Section $section)
    {
        $this->section = $section;

        return $this;
    }
}
