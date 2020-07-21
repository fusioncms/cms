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
     * Replicator relationship.
     *
     * @return HasOneRelationship
     */
    public function replicator()
    {
        return $this->hasOne("Fusion\Models\Replicators\\" . Str::studly($this->handle));
    }

    /**
     * Field relationship.
     *
     * @return HasOneRelationship
     */
    public function field()
    {
        return $this->belongsTo(Field::class);
    }
}