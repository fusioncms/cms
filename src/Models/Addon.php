<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Fusion\Facades\Addon as AddonFacade;
use Fusion\Concerns\HasLocalEloquentData;

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