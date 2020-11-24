<?php

namespace Fusion\Fieldtypes;

use Exception;

// use Fusion\Modules\Settings\Models\Setting;

class Registry
{
    /**
     * The fieldtype registry stack.
     *
     * @var array
     */
    protected $fieldtypes;

    /**
     * Create a new FieldtypeRegistry instance.
     */
    public function __construct()
    {
        $this->fieldtypes = collect([]);
    }

    /**
     * Register a new fieldtype within the registry.
     *
     * @param string    $name
     * @param Fieldtype $fieldtype
     *
     * @return self
     */
    public function register($fieldtype)
    {
        if ($this->fieldtypes->search($fieldtype) === false) {
            $instance = new $fieldtype();

            $this->fieldtypes->put($instance->getHandle(), $instance);
        }

        return $this;
    }

    /**
     * Determine if the registry has a given fieldtype.
     *
     * @param string $fieldtype
     *
     * @return bool
     */
    public function has($fieldtype)
    {
        return $this->fieldtypes->has($fieldtype);
    }

    /**
     * Get the given fieldtype from the registry.
     *
     * @param string $fieldtype
     *
     * @return \Fusion\Modules\Fields\Fieldtypes\Fieldtype
     */
    public function get($fieldtype)
    {
        $type = $this->fieldtypes->get($fieldtype);

        if (!is_null($type)) {
            return $type;
        }

        throw new Exception('Fieldtype not found in registry. ['.$fieldtype.']');
    }

    /**
     * Returns all registered fieldtypes sorted by name.
     * 
     * @return Collection          
     */
    public function all()
    {
        return $this->fieldtypes->sortBy('name');
    }
}
