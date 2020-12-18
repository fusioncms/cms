<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasBlueprint;
use Fusion\Concerns\HasBuilder;
use Fusion\Contracts\Structure;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\Models\Activity;

class Navigation extends Model implements Structure
{
    use HasBlueprint;
    use HasActivity;
    use HasFactory;
    use HasBuilder;

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

    protected $structure = 'Navigation';

    /**
     * Navigation has many nodes.
     *
     * @return HasManyRelationship
     */
    public function nodes()
    {
        return $this->hasMany($this->getBuilderModelNamespace())->orderBy('order', 'asc');
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
