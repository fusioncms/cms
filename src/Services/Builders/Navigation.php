<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Navigation as Model;

class Navigation extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct($handle)
    {
        $this->source = Model::where('handle', $handle)->firstOrFail();
    }
}
