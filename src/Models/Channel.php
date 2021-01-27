<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class Channel extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle'];
}
