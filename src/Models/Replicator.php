<?php

namespace Fusion\Models;

use Illuminate\Support\Str;
use Fusion\Concerns\HasFieldset;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Fusion\Services\Builders\Replicator as Builder;

class Replicator extends Model
{
    use CachesQueries, HasFieldset;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [ 'field_id', 'name', 'handle', 'uniqid' ];

    /**
     * @param  \Fusion\Models\Section $section
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder(Section $section)
    {
        return Builder::resolve($this->handle, $section);
    }

    /**
     * Get `sections` relationship.
     * 
     * @return Builder|Collection
     */
    public function sections()
    {
        return $this->fieldset->sections();
    }

    /**
     * Get `replicant` relationship.
     * 
     * @param  Section $section
     * @return Builder
     */
    public function replicant(Section $section)
    {
        return $this->hasMany(get_class($this->getBuilder($section)));
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