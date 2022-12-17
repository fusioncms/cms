<?php

namespace Fusion\Models;

use Fusion\Concerns\HasBlueprint;
use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasBuilder;
use Fusion\Contracts\Structure;
use Fusion\Database\Eloquent\Model;
use Fusion\Services\Builders;

class Replicator extends Model implements Structure
{
    use HasBlueprint;
    use HasBuilder;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['field_id', 'name', 'handle', 'uniqid'];

    protected $structure = 'Replicators';

    protected $blueprintHidden = true;

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

    public function getBuilderTable($section)
    {
        $namespace = $this->getBuilderNamespace();
        $prefix    = $namespace::prefix();

        return "{$prefix}_{$this->handle}_{$section->handle}_{$this->uniqid}";
    }
}
