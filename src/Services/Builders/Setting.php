<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Setting as Model;

class Setting extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct(string $handle)
    {
        $this->source = Model::where('handle', $handle)->firstOrFail();
    }
