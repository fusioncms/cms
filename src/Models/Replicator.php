<?php

namespace Fusion\Models;

use Illuminate\Support\Str;
use Fusion\Concerns\HasFieldset;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;

class Replicator extends Model
{
    use CachesQueries, HasFieldset;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [ 'field_id', 'name', 'handle' ];

    /**
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Replicator($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return "{$this->table}_{$this->handle}";
    }

    /**
     * Replicants relationship.
     *
     * @return HasMany|Collection
     */
    public function replicants()
    {
        return $this->hasMany(get_class($this->getBuilder()));
    }

    /**
     * Field relationship.
     *
     * @return BelongsTo|Collection
     */
    public function field()
    {
        return $this->belongsTo(Field::class);
    }
}