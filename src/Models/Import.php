<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;

class Import extends Model
{
    use HasActivity;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'source',
        'schedule',
        'module',
        'group',
        'strategy',
        'preview',
        'mappings',
        'backup',
        'status',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'strategy' => 'collection',
        'preview'  => 'collection',
        'mappings' => 'collection',
        'backup'   => 'boolean',
        'status'   => 'boolean',
    ];

    /**
     * Has Many relationship.
     *
     * @return Builder
     */
    public function logs()
    {
        return $this->hasMany(ImportLog::class);
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
        $subject = $activity->subject;
        $action = ucfirst($eventName);
        $properties = [
            'link' => "importer/{$subject->id}/edit",
            'icon' => 'ship',
        ];

        $activity->description = "{$action} import ({$subject->name})";
        $activity->properties = $properties;
    }
}
