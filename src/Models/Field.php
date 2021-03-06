<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Field extends Model
{
    use HasFactory;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'help',
        'required',
        'type',
        'settings',
        'validation',
        'order',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'required'   => 'boolean',
        'settings'   => 'collection',
        'validation' => 'collection',
        'status'     => 'boolean',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'settings'   => '',
        'validation' => '',
    ];

    /**
     * Get owning relationship.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function fieldable()
    {
        return $this->morphTo();
    }

    /**
     * Return the fieldtype instance of this field.
     *
     * @return Fieldtype
     */
    public function type()
    {
        return fieldtypes()->get($this->type);
    }

    /**
     * Returns validation parameters,
     *   else if no validation returns false.
     *
     * @param string $value
     *
     * @return \Illuminate\Support\Collection|false
     */
    public function getValidationAttribute($value)
    {
        $value = collect(json_decode($value));

        return $value->isNotEmpty() ? $value : false;
    }
}
