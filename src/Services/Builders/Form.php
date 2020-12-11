<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Form as Model;

class Form extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct($form)
    {
        $this->source = Model::where('handle', $handle)->firstOrFail();
    }
}
