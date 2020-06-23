<?php

namespace Fusion\Providers;

use Fusion\Models\Settings\Field;
use Fusion\Models\Settings\Section;
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
        // if (app_installed()) {
        //     Field::where('override', '<>', '')->each(function ($setting) {
        //         $envKey = strtoupper(str_replace('.', '_', $setting->override));

        //         if (Config::has($setting->override) && ! empty($setting->value)) {
        //             Config::set($setting->override, env($envKey, $setting->value));
        //         }
        //     });
        // }
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // Explicit model binding..
        Route::bind('section', function($handle) {
            return Section::where('handle', $handle)->first() ?? abort(404);
        });

        // Settings facade..
        $this->app->bind('setting', function() {
            return new \Fusion\Services\Setting;
        });
    }
}
