<?php

namespace Fusion\Providers;

use Fusion\Services\Addon;
use Fusion\Services\Manifest;
use Illuminate\Support\ServiceProvider;

class AddonServiceProvider extends ServiceProvider
{
    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('addon', function ($app) {
            $addons = [];

            if (file_exists(storage_path('app/addons.json'))) {
                $addons = (new Manifest(storage_path('app/addons.json')));
            }

            return new Addon($addons);
        });
    }
}
