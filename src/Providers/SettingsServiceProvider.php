<?php

namespace Fusion\Providers;

use Fusion\Models\Setting as SettingGroup;
use Fusion\Services\Setting as SettingService;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class SettingsServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->configOverrides();
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // Explicit model binding..
        Route::bind('group', function($handle) {
            return SettingGroup::where('handle', $handle)->first() ?? abort(404);
        });

        // load system settings
        $this->app->singleton('setting', function() {
            $items = cache()->rememberForever('settings', function () {
                return SettingGroup::all()->flatMap(function($group) {
                    $setting = $group->getBuilder()->first();

                    return $group->fieldset->fields
                        ->mapWithKeys(function($field) use ($group, $setting) {
                            return [ "{$group->handle}.{$field->handle}"
                                => $setting->{$field->handle} ?? null ];
                        });
                });
            });

            return new SettingService($items->all());
        });
    }

    /**
     * Override configurations from config('setting').
     * 
     * @return void
     */
    private function configOverrides()
    {
        SettingGroup::all()->each(function($group) {
            $group->fieldset->fields->each(function($field) use ($group) {
                if ($field->settings['override'] !== false) {
                    config([
                        $field->settings['override'] =>
                        setting("{$group->handle}.{$field->handle}")
                    ]);
                }
            });
        });
    }
}
