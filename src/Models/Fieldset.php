<?php

namespace Fusion\Models;

use Fusion\Contracts\FieldContract;
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
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Fieldset($this->handle);

        return $builder->make();
    }

    /**
     * Get the fields for the given section.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function fields()
    {
        return $this->morphMany(Field::class, 'fieldable')->orderBy('order');
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return "fx_{$this->handle}";
    }

    /**
     * Returns the Field's tablename.
     *
     * @return string
     */
    public function tableName()
    {
        return $this->getTableAttribute();
    }
}
