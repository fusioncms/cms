<?php

namespace Fusion\Models;

use Fusion\Concerns\HasLocalEloquentData;
use Fusion\Database\Eloquent\Model;
use Fusion\Facades\Addon as AddonFacade;

class Addon extends Model
{
    use HasLocalEloquentData;

    protected $schema = [
        'enabled'   => 'boolean',
        'installed' => 'boolean',
    ];

    protected $casts = [
        'enabled'   => 'boolean',
        'installed' => 'boolean',
    ];

    public function getRows()
    {
        return AddonFacade::values()->toArray();
    }
}
