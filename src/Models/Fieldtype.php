<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Model;

class Fieldtype extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'exclude'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'exclude' => 'collection',
    ];

    /**
     * Get the fieldtype for the given record.
     *
     * @return \Fusion\Fieldtypes\Fieldtype
     */
    public function fieldtype()
    {
        return fieldtypes()->get($this->handle);
    }
}
