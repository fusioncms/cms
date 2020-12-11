<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Taxonomy as Model;

class Taxonomy extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct($handle)
    {
        $this->taxonomy = Model::where('handle', $handle)->firstOrFail();
    }

    /**
     * Mass assignment protection.
     * 
     * @var array
     */
    protected function getFillable()
    {
        return ['taxonomy_id', 'parent_id', 'name', 'slug', 'status'];
    }

    /**
     * Attribute casting.
     * 
     * @var array
     */
    protected function getCasts()
    {
        return [
	        'status' => 'boolean',
        ];
    }
}
