<?php

namespace Fusion\Concerns;

use Fusion\Models\Blueprint;

trait HasBlueprint
{
    /**
     * Get the model's blueprint.
     */
    public function blueprint()
    {
        return $this->morphOne(Blueprint::class, 'blueprintable');
    }
}