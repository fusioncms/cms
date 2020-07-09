<?php

namespace Fusion\Models;

use Fusion\Concerns\HasFieldset;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class Setting extends Model
{
    use CachesQueries, HasFieldset;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'description',
        'group',
        'icon',
        'status',
    ];

    /**
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Setting($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return "{$this->table}_{$this->handle}";
    }

    /**
     * Group have many settings.
     *
     * @return HasManyRelationship
     */
    public function settings()
    {
        $model = $this->getBuilder();
        $class = new \ReflectionClass($model);

        return $this->hasOne('\\'.$class->getName());
    }

    /**
     * Load system settings.
     * 
     * @return array
     */
    public static function loadSettings()
    {
        if (settings_available()) {
            /**
             * Load settings from database
             */
            return cache()->rememberForever('settings', function () {
                return self::all()->flatMap(function($group) {
                    $setting = $group->getBuilder()->first();

                    return $group->fieldset->fields
                        ->mapWithKeys(function($field) use ($group, $setting) {
                            return [ "{$group->handle}.{$field->handle}"
                                => $setting->{$field->handle} ?? null ];
                        });
                });
            })->all();
        } else {
            /**
             * Load settings from flat files
             */
            $files   = glob(fusion_path('settings') . '/*.php');
            $results = [];

            foreach ($files as $file) {
                $group    = basename($file, '.php');
                $contents = require $file;

                foreach ($contents['settings'] as $settings) {
                    foreach ($settings as $setting) {
                        $results["{$group}.{$setting['handle']}"] = $setting['value'] ?? $setting['default'] ?? '';
                    }
                }
            }
            
            return $results;
        }
    }
}