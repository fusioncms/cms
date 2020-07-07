<?php

namespace Fusion\Providers;

use Fusion\Models\Setting as SettingGroup;
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
        // // Explicit model binding..
        // Route::bind('section', function($handle) {
        //     return Section::where('handle', $handle)->first() ?? abort(404);
        // });

        // Settings facade..
        $this->app->singleton('setting', function() {
            // SettingGroup::all()->each(function($group) {
            //     dd($group->getBuilder()->group);
            //     dd($group->fieldset->fields);
            // });
            // $model   = (new \Fusion\Services\Builders\Setting)->make();
            // $setting = $model->firstOrCreate(['id' => 1]);
// dd('SettingServiceProvider');
            $items = collect([])->mapWithKeys(function($value, $key){
                return [ (string) Str::of($key)->replaceFirst('_', '.') => $value ];
            });

            return new \Fusion\Services\Setting($items->all());
        });
    }

    /**
     * Override configurations from config('setting').
     * 
     * @return void
     */
    private function configOverrides()
    {
        // collect(config('setting.override', []))->each(function($settingKey, $configKey) {
        //     if (! is_null($settingValue = setting($settingKey))) {
        //         config([$configKey => $settingValue]);
        //     }
        // });
    }
}
