<?php

namespace Fusion\Providers;

use Fusion\Services\Addon;
use Fusion\Services\Manifest;
use Illuminate\Support\ServiceProvider;

class AddonServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('addon', function($app) {
            $addons    = [];
            $manifests = [];

            if (file_exists(addon_path()) and is_dir(addon_path())) {
                $addons = $this->app['files']->directories(addon_path());

                foreach ($addons as $addon) {
                    $manifest              = new Manifest($addon.'/addon.json');
                    $namespace             = $manifest->get('namespace');
                    $manifests[$namespace] = collect($manifest->all());
                }
            }

            return new Addon($manifests);
        });
    }
}