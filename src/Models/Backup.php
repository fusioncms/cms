<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class Backup extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'disk',
        'size',
    ];
}
