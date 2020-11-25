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
    protected $fillable = [ 'handle', 'fieldtypes' ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'fieldtypes' => 'collection',
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
}
