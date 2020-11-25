<?php

namespace Fusion\Structures;

class CollectionStructure extends Structure
{
	/**
	 * Structure name.
	 * 
	 * @var string
	 */
	public $name = 'Collection';

	/**
	 * Excluded fieldtypes.
	 * 
	 * @var array
	 */
	public $excluded = [];

	/**
     * Get the fieldtype name property.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get the fieldtype handle based off the name property.
     *
     * @return string
     */
    public function getHandle()
    {
        return str_handle($this->getName());
    }
}