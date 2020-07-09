<?php

namespace Fusion\Providers;

use Fusion\Models\Setting as SettingGroup;
use Fusion\Services\Setting as SettingService;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class SettingServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if (settings_available()) {
            $this->configOverrides();
        }
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
            return new SettingService(
                SettingService::loadSettings()
            );
        });
    }

    /**
     * Override config values from settings.
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