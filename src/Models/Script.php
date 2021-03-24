<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Script extends Model
{
    use HasActivity;
    use HasFactory;

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
        'trigger_on',
        'trigger_where',
        'type',
        'order',
        'status',
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
