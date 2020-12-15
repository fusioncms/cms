<?php

namespace Fusion\Models;

use Fusion\Concerns\HasBlueprint;
use Fusion\Contracts\Structure;
use Fusion\Database\Eloquent\Model;
use Fusion\Services\Builders;

class Replicator extends Model implements Structure
{
    use HasBlueprint;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['field_id', 'name', 'handle', 'uniqid'];

    protected $blueprintGroup = 'Replicators';

    /**
     * @param \Fusion\Models\Section $section
     *
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder(Section $section)
    {
        return Builders\Replicator::resolve($this->uniqid, $section);
    }

    /**
     * Get `sections` relationship.
     *
     * @return Builder|Collection
     */
    public function sections()
    {
        return $this->blueprint->sections();
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
