<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class Structure extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'handle', 'excluded'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'excluded' => 'collection',
    ];

    /**
     * Get the structure for the given record.
     *
     * @return \Fusion\Structures\Structure
     */
    public function structure()
    {
        return structures()->get($this->handle);
    }

    /**
     * Return valid Fieldsets for this Structure.
     *
     * @return \Illuminate\Support\Collection
     */
    public function fieldtypes()
    {
        return fieldtypes()->all()->reject(function ($fieldtype) {
            return in_array($fieldtype->getHandle(), $this->excluded->toArray());
        });
    }
}
