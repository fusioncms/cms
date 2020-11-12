<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Model;

class Fieldset extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle'];

    /**
     * Get the fields for the given section.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function fields()
    {
        return $this->hasMany(Field::class)->orderBy('order');
    }
}
