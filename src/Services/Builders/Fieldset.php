<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Fieldset as FieldsetModel;

class Fieldset extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct($handle)
    {
        $this->source = FieldsetModel::where('handle', $handle)->firstOrFail();
    }
}
