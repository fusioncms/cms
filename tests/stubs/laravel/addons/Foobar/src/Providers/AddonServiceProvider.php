<?php

namespace Addons\Foobar\Providers;

use Fusion\Facades\Fusion;
use Illuminate\Support\ServiceProvider;

class AddonServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadTranslationsFrom(addon_path('Foobar/resources/lang'), 'foobar');
        $this->loadViewsFrom(addon_path('Foobar/resources/views'), 'foobar');
        $this->loadMigrationsFrom(addon_path('Foobar/database/migrations'), 'foobar');
        // $this->loadConfigsFrom(addon_path('Foobar/config'));
        $this->loadFactoriesFrom(addon_path('Foobar/database/factories'));

        Fusion::asset('/addons/foobar/css/foobar.css');
        Fusion::asset('/addons/foobar/js/foobar.js');
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(MenuServiceProvider::class);
        $this->app->register(RouteServiceProvider::class);
    }
}
