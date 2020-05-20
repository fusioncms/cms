<?php

namespace Fusion\Providers;

use Fusion\Services\Theme;
use Fusion\Services\Manifest;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
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
        $this->app->singleton('theme', function($app) {
            $themes    = [];
            $manifests = [];

            if (file_exists(theme_path()) and is_dir(theme_path())) {
                $themes = $this->app['files']->directories(theme_path());

                foreach ($themes as $theme) {
                    $manifest              = new Manifest($theme.'/theme.json');
                    $namespace             = $manifest->get('namespace');
                    $manifests[$namespace] = collect($manifest->all());
                }
            }

            return new Theme($manifests);
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['theme'];
    }
}