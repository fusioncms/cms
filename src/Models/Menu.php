<?php

namespace Fusion\Models;

use Fusion\Concerns\CachesQueries;
use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasFieldset;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;

class Menu extends Model
{
    use CachesQueries;
    use HasFieldset;
    use HasActivity;

    protected $with = ['fieldsets'];

    protected $appends = ['fieldset'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'description',
    ];

    /**
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Menu($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'menu_'.$this->handle;
    }

    /**
     * Menus have many nodes.
     *
     * @return HasManyRelationship
     */
    public function nodes()
    {
        $model = $this->getBuilder();
        $class = new \ReflectionClass($model);

        return $this->hasMany('\\'.$class->getName())->orderBy('order', 'asc');
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
            'link' => "menus/{$subject->id}/edit",
            'icon' => 'anchor',
        ];

        $activity->description = "{$action} menu ({$subject->name})";
        $activity->properties  = $properties;
    }
}
