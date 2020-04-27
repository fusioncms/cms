<?php

namespace Modules\BetaModule\Providers;

use Menu;
use Caffeinated\Bonsai\Facades\Bonsai;
use Caffeinated\Modules\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('beta', 'resources/lang', config('module.default_location')), 'beta');
        $this->loadViewsFrom(module_path('beta', 'resources/views', config('module.default_location')), 'beta');
        $this->loadMigrationsFrom(module_path('beta', 'database/migrations', config('module.default_location')), 'beta');
        $this->loadConfigsFrom(module_path('beta', 'config', config('module.default_location')));
        $this->loadFactoriesFrom(module_path('beta', 'database/factories', config('module.default_location')));

        Bonsai::add('/modules/beta/css/beta.css');
        Bonsai::add('/modules/beta/js/beta.js');
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }
}
