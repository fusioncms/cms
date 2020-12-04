<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'blueprint_id',
        'name',
        'handle',
        'description',
        'placement',
        'order',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'sections';

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
     * A section belongs to a blueprint.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function blueprint()
    {
        return $this->belongsTo(Blueprint::class);
    }

    /**
     * Returns the Field's tablename.
     *
     * @return string
     */
    public function getBuilderTable()
    {
        return $this->blueprint->blueprintable->getBuilderTable();
    }
}
