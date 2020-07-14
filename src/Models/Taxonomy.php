<?php

namespace Fusion\Models;

use Illuminate\Support\Str;
use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasFieldset;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;

class Taxonomy extends Model
{
    use CachesQueries, HasFieldset, HasActivity;

    protected $with = ['fieldsets'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'slug',
        'description',
        'fieldset_id',
        'sidebar',
        'icon',
        'route',
        'template'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'sidebar' => 'boolean',
    ];

    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Taxonomy($this->handle);

        return $builder->make();
    }

    public function getAdminPathAttribute()
    {
        return '/taxonomies/' . $this->id;
    }

    /**
     * Get the "slug" attribute value.
     *
     * @return string
     */
    public function getSlugAttribute()
    {
        return Str::slug($this->handle);
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'taxonomy_' . $this->handle;
    }

    /**
     * Taxonomies have many terms.
     *
     * @return HasManyRelationship
     */
    public function terms()
    {
        $model = $this->getBuilder();
        $class = new \ReflectionClass($model);

        return $this->hasMany('\\'.$class->getName());
    }

    /**
     * Tap into activity before persisting to database.
     *
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject    = $activity->subject;
        $action     = ucfirst($eventName);
        $properties = [
            'link' => "taxonomies/{$subject->id}/edit",
            'icon' => 'sitemap'
        ];

        $activity->description = "{$action} taxonomy ({$subject->name})";
        $activity->properties  = $properties;
    }
}
