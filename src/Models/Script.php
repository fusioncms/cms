<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class Script extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'code',
        'location',
        'include_on',
        'include_where',
        'type',
        'order',
        'status'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];
}
