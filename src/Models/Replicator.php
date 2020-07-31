<?php

namespace Fusion\Models;

use Fusion\Concerns\CachesQueries;
use Fusion\Concerns\HasFieldset;
use Fusion\Database\Eloquent\Model;
use Fusion\Services\Builders\Replicator as Builder;

class Replicator extends Model
{
    use CachesQueries;
    use HasFieldset;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['field_id', 'name', 'handle', 'uniqid'];

    /**
     * @param \Fusion\Models\Section $section
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder(Section $section)
    {
        return Builder::resolve($this->uniqid, $section);
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
     * Field relationship.
     *
     * @return BelongsTo|Collection
     */
    public function field()
    {
        return $this->belongsTo(Field::class);
    }
}
