<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasBlueprint;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;

class Navigation extends Model
{
    use HasBlueprint;
    use HasActivity;

    protected $with = ['blueprint'];

    protected $table = 'navigation';

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

    protected $blueprintGroup = 'Navigation';

    /**
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Navigation($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function builderName()
    {
        return "navigation_{$this->handle}";
    }

    /**
     * Navigation has many nodes.
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
            'link' => "navigation/{$subject->id}/edit",
            'icon' => 'anchor',
        ];

        $activity->description = "{$action} navigation ({$subject->name})";
        $activity->properties  = $properties;
    }
}
