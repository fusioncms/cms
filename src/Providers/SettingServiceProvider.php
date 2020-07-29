<?php

namespace Fusion\Providers;

use Fusion\Models\Setting as SettingGroup;
use Fusion\Services\Setting as SettingService;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class SettingServiceProvider extends ServiceProvider
{
    /**
     * @var array
     */
    private $settings;

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->settings = SettingService::load();

        if (settings_available()) {
            $this->bootConfigOverrides();
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
        Route::bind('group', function ($handle) {
            return SettingGroup::where('handle', $handle)->first() ?? abort(404);
        });

        // load system settings
        $this->app->singleton('setting', function () {
            return new SettingService($this->settings);
        });
    }

    /**
     * Override config values from settings.
     *
     * @return void
     */
    private function bootConfigOverrides()
    {
        SettingGroup::all()->each(function ($group) {
            if ($group->fieldset) {
                $group->fieldset->fields->each(function ($field) use ($group) {
                    if ($field->settings['override'] !== false) {
                        $key = $field->settings['override'];
                        $value = setting("{$group->handle}.{$field->handle}");

                        if (is_a($value, Collection::class)) {
                            $value = $value->all();
                        }

                        // For file types we want to pass the path of the file
                        // through to override config values.
                        //
                        // TODO: Think of a more sustainable way to configure
                        // these instances so other fields can determine how
                        // they should override config values.
                        if ($field->type == 'file' and isset($value[0])) {
                            $value = storage_path('app/public/'.$value[0]->location);
                        }

                        config([$key => $value]);
                    }
                });
            }
        });
    }
}
