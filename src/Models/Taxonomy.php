<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasBlueprint;
use Fusion\Concerns\HasBuilder;
use Fusion\Contracts\Structure;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
use Spatie\Activitylog\Models\Activity;

class Taxonomy extends Model implements Structure
{
    use HasBlueprint;
    use HasActivity;
    use HasFactory;
    use HasBuilder;

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
        'sidebar',
        'icon',
        'route',
        'template',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'sidebar' => 'boolean',
    ];

    protected $blueprintGroup = 'Taxonomy';

    /**
     * Get admin path.
     *
     * @return string
     */
    public function getAdminPathAttribute()
    {
        return "/taxonomies/{$this->id}";
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
            'link' => "taxonomies/{$subject->id}/edit",
            'icon' => 'sitemap',
        ];

        $activity->description = "{$action} taxonomy ({$subject->name})";
        $activity->properties  = $properties;
    }
}
