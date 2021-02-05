<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Disk extends Model
{
    use HasFactory;

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    // protected static function booted()
    // {
    //     static::saved(function ($disk) {
    //         if ($disk->is_default) {
    //             static::where('id', '<>', $disk->id)->update(['is_default' => false]);
    //         }

    //         static::MergeWithConfigurations();
    //     });
    // }

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'driver',
        'disk',
        'is_default',
        'configurations'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    // protected $hidden = [
    //     'configurations'
    // ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'is_default'     => 'boolean',
        'configurations' => 'encrypted:collection',
    ];

    /**
     * Scope a query to only include the default disk.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeDefault($query)
    {
        return $query->where('is_default', true);
    }

    /**
     * Merge in FileSystem Disks configurations.
     * 
     * @return void
     */
    public static function MergeWithConfigurations()
    {
        // Set default disk..
        if ($default = Disk::default()->first()) {
            config(['filesystems.default' => $default->handle]);
        }

        // Merge in disks..
        config(['filesystems.disks' => 
            array_merge(
                config('filesystems.disks', []),
                Disk::all()->mapWithKeys(function($disk) {
                    $configs = $disk->configurations;
                    $configs->put('driver', $disk->driver);
                    
                    return [ $disk->handle => $configs->toArray() ];
                })->toArray()
            )
        ]);
    }
}
