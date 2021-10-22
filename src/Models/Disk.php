<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\Models\Activity;

class Disk extends Model
{
    use HasActivity;
    use HasFactory;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'driver',
        'order',
        'configurations',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'configurations' => 'encrypted:collection',
    ];

    /**
     * Merge in FileSystem Disks configurations.
     * [Static Method].
     *
     * @return void
     */
    public static function MergeConfigs()
    {
        Disk::all()->each(function ($disk) {
            self::AddConfig($disk->handle, $disk->driver, $disk->configurations->all());
        });
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
        $action  = ucfirst($eventName);

        $activity->description = "{$action} disk ({$subject->name})";
        $activity->properties  = ['icon' => 'hdd'];
    }

    /**
     * Add/Override `filesystems.disks` configuration.
     * [Static Method].
     *
     * @param string $handle
     * @param string $driver
     * @param array  $configurations
     *
     * @return void
     */
    public static function AddConfig($handle, $driver, array $configurations = [])
    {
        $disks = config('filesystems.disks');

        if ($driver == 'local') {
            $configurations['root'] = storage_path($configurations['root']);
        }

        $disks[$handle] = ['driver' => $driver] + $configurations;

        config(['filesystems.disks' => $disks]);
    }

    /**
     * Remove `filesystems.disks` configuration.
     * [Static Method].
     *
     * @param string $handle
     *
     * @return void
     */
    public static function RemoveConfig($handle)
    {
        $disks = config('filesystems.disks');

        unset($disks[$handle]);

        config(['filesystems.disks' => $disks]);
    }
}
