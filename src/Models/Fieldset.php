<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fieldset extends Model
{
    use HasFactory;

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
    public function refreshBuilder()
    {
        $builder = new \Fusion\Services\Builders\Fieldset($this->handle);

        return $builder->make();
    }

    /**
     * Get the builder's table name.
     *
     * @return string
     */
    public function getBuilderTable()
    {
        return "fx_{$this->handle}";
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
}
