<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;

class Setting extends Model
{
    use CachesQueries, HasActivity;

    /**
     * The attributes that are guarded via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'section_id',
        'name',
        'handle',
        'group',
        'override',
        'component',
        'description',
        'type',
        'options',
        'default',
        'value',
        'required',
        'gui',
        'order'
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'required' => 'boolean',
        'gui'      => 'boolean',
        'options'  => 'collection',
    ];

    /**
     * SettingSection Relationship.
     *
     * @return Builder|SettingSection
     */
    public function section() {
        return $this->belongsTo(SettingSection::class);
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
        if ($eventName == 'updated') {
            $setting = $activity->subject;
            $section = $setting->section;
            $action  = ucfirst($eventName);

            $activity->description = "{$action} {$section->name} settings";
            $activity->properties  = [
                'icon' => 'cog',
                'link' => 'settings'
            ];
        }
    }
}
