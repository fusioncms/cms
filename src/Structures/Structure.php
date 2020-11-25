<?php

namespace Fusion\Structures;

use Fusion\Models\Structure as StructureModel;
use Illuminate\Support\Str;

abstract class Structure
{
    /**
     * Structure name.
     * 
     * @var string
     */
    public $name;

    /**
     * Excluded fieldtypes.
     * 
     * @var array
     */
    public $excluded = [];

    /**
     * Get the fieldtype handle based off the name property.
     *
     * @return string
     */
    public function getHandle()
    {
        return str_handle($this->name);
    }

    /**
     * Get all registered Fieldtypes for this Structure.
     *  
     * @return Collection
     */
    public function fieldtypes()
    {
        return StructureModel::where('handle', $this->getHandle())
            ->firstOrFail()
            ->fieldtypes
            ->mapWithKeys(function ($handle) {
                return [
                    $handle => fieldtypes()->get($handle)
                ];
            });
    }
}