<?php

namespace Fusion\Models;

use Fusion\Concerns\HasLocalEloquentData;
use Fusion\Database\Eloquent\Model;

class Addon extends Model
{
    use HasLocalEloquentData;

    public function getRows()
    {
        return app('addons.manifest')->addons()->map(function ($addon) {
            return [
                'name'        => $addon['name'],
                'version'     => $addon['version'],
                'description' => $addon['description']
            ];
        })->values()->toArray();
    }
}
