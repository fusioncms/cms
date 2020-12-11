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
}
