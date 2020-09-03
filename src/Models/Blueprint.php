<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class Blueprint extends Model
{
    /**
     * Get the owning blueprintable model.
     */
    public function blueprintable()
    {
        return $this->morphTo();
    }
}