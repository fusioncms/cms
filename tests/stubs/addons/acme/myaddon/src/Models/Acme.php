<?php

namespace Acme\Myaddon\Models;

use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Acme extends Model
{
    use HasFactory;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'slug',
        'handle',
        'description',
        'status'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'hidden' => 'boolean',
    ];
}
