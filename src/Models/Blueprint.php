<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;

class Blueprint extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'group',
        'hidden',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'hidden' => 'boolean',
    ];

    /**
     * Get the owning blueprintable model.
     */
    public function blueprintable()
    {
        return $this->morphTo();
    }

    /**
     * A blueprint has many sections.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function sections()
    {
        return $this->hasMany(Section::class)->orderBy('order');
    }

    /**
     * Get all of the fields from sections.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasManyThrough
     */
    public function fields()
    {
        return $this->hasManyThrough(Field::class, Section::class)->orderBy('order');
    }

    /**
     * Check if model has assigned fields.
     *
     * @return bool
     */
    public function hasSections()
    {
        return null !== @$this->sections;
    }

    /**
     * Check if model has assigned fields.
     *
     * @return bool
     */
    public function hasFields()
    {
        return null !== @$this->fields;
    }

    /**
     * Return the fields that define relationships.
     *
     * @return self
     */
    public function relationships()
    {
        return $this->fields->reject(function ($field) {
            return is_null($field->type()->getRelationship());
        });
    }

    /**
     * Scope a query to only include visible records.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('hidden', false);
    }

    /**
     * Tap into activity before persisting to database.
     *
     * @param \Spatie\Activitylog\Models\Activity $activity
     * @param string                              $eventName
     *
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject    = $activity->subject;
        $action     = ucfirst($eventName);
        $properties = [
            'link' => "blueprints/{$subject->id}/edit",
            'icon' => 'list',
        ];

        $activity->description = "{$action} blueprint ({$subject->name})";
        $activity->properties  = $properties;
    }
}