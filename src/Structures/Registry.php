<?php

namespace Fusion\Structures;

use Exception;

class Registry
{
    /**
     * The structure registry stack.
     *
     * @var array
     */
    protected $structures;

    /**
     * Create a new Structure Registry instance.
     */
    public function __construct()
    {
        $this->structures = collect([]);
    }

    /**
     * Register a new Structure within the registry.
     *
     * @param \Fusion\Structures\Structure $structure
     *
     * @return self
     */
    public function register($structure)
    {
        if ($this->structures->search($structure) === false) {
            $instance   = new $structure();
            $handle     = $instance->getHandle();
            $fieldtypes = $this->defaultFieldtypes($instance);

            $structures->put($handle, $instance);

            $model = Structure::firstOrCreate(
                ['handle' => $handle], ['fieldtypes' => []]);

            $merged = array_merge($model->fieldtypes->all(), $fieldtypes->all());
            $merged = array_unique($merged);

            $model->update([ 'fieldtypes' => $merged ]);
        }

        return $this;
    }

    /**
     * Determine if the registry has a given structure.
     *
     * @param string $handle
     *
     * @return bool
     */
    public function has($handle)
    {
        return $this->structures->has($handle);
    }

    /**
     * Get the given strucutre from the registry.
     *
     * @param string $handle
     *
     * @return \Fusion\Structures\Structure $handle
     * 
     * @throws \Exception
     */
    public function get($handle)
    {
        $structure = $this->structures->get($handle);

        if (!is_null($structure)) {
            return $structure;
        }

        throw new Exception('Fieldtype not found in registry. ['.$handle.']');
    }

    /**
     * Returns all registered Structures.
     * 
     * @return Collection
     */
    public function all()
    {
        return $this->structures;
    }

    /**
     * Returns all registered Structures.
     *
     * @param \Fusion\Structures\Structure $structure
     * 
     * @return Collection
     */
    private function defaultFieldtypes($stucture)
    {
        return fieldtypes()->all()
            ->filter(function($fieldtype) use ($stucture) {
                return in_array($fieldtype->getHandle(), $stucture->excluded);
            })
            ->map(function($fieldtype) {
                return $fieldtype->getHandle();
            });
    }
}
