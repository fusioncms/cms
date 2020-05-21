<?php

namespace Fusion\Providers;

use Fusion\Facades\Theme;
use Fusion\Models\Mailable;
use Laravel\Passport\Passport;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class FusionServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerProviders();
        $this->registerMigrations();
        $this->registerPublishing();
        $this->registerViews();
        $this->registerRoutes();
        $this->registerGates();

        Passport::routes();

        if (app_installed()) {
            $this->registerTheme();
        }
    }

    /**
     * Register the permission gates.
     *
     * @return void
     */
    protected function registerGates()
    {
        Gate::before(function ($user, $ability) {
            return $user->hasRole(['developer','owner']) ? true : null;
        });
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        if (! defined('FUSION_VERSION')) {
            define('FUSION_VERSION', '6.0.0-beta.5');
        }

        $this->registerFusion();
        $this->registerConfig();
        $this->registerTelescope();

        $this->commands([
            \Fusion\Console\UninstallCommand::class,
            \Fusion\Console\InstallCommand::class,
            \Fusion\Console\MakeThemeCommand::class,
            \Fusion\Console\PublishCommand::class,
            \Fusion\Console\RefreshCommand::class,
            \Fusion\Console\FlushCommand::class,
            \Fusion\Console\SyncCommand::class,
        ]);
    }

    /**
     * Register the primary Fusion class and its
     * binding within the service container.
     *
     * @return void
     */
    private function registerFusion()
    {
        $this->app->bind('fusion', function() {
            return new \Fusion\Fusion;
        });
    }

    /**
     * Register the package's supplied service providers.
     *
     * @return void
     */
    private function registerProviders()
    {
        $this->app->register(BladeServiceProvider::class);
        $this->app->register(EventServiceProvider::class);
        $this->app->register(SettingsServiceProvider::class);
        $this->app->register(FieldtypeServiceProvider::class);
        $this->app->register(ThemeServiceProvider::class);
    }

    /**
     * Register Laravel Telescope when in the local environment.
     *
     * @return void
     */
    private function registerTelescope()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Register FusionCMS' views with Laravel.
     *
     * @return void
     */
    private function registerViews()
    {
        View::getFinder()->prependLocation(fusion_path('resources/views'));
    }

    /**
     * Register FusionCMS' publishable resources.
     *
     * @return void
     */
    private function registerPublishing()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                fusion_path('/public') => public_path('vendor/fusion'),
            ], 'fusion-assets');

            $this->publishes([
                fusion_path('/config/fusion.php') => config_path('fusion.php'),
            ], 'fusion-config');

            $this->publishes([
                fusion_path('/themes') => base_path('themes'),
            ], 'fusion-themes');
        }
    }

    /**
     * Register the currently active theme.
     *
     * @return void
     */
    private function registerTheme()
    {
        Theme::activate(setting('system.theme'));
    }

    /**
     * Register the package's migrations.
     *
     * @return void
     */
    private function registerMigrations()
    {
        if ($this->app->runningInConsole()) {
            $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
        }
    }

    /**
     * Register the package's config.
     *
     * @return void
     */
    private function registerConfig()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../../config/analytics.php', 'analytics'
        );

        $this->mergeConfigFrom(
            __DIR__.'/../../config/fusion.php', 'fusion'
        );

        $this->mergeConfigFrom(
            __DIR__.'/../../config/permission.php', 'permission'
        );
    }

    /**
     * Register the package's routes.
     *
     * @return void
     */
    private function registerRoutes()
    {
        Route::mixin(new \Laravel\Ui\AuthRouteMethods());

        $this->registerRouteBindings();
        $this->registerRoutePatterns();

        $path = dirname(__FILE__).'/../../';

        Route::group($this->routeWebConfiguration(), function () use ($path) {
            $this->loadRoutesFrom(realpath($path.'routes/web.php'));
        });

        Route::group($this->routeAPIConfiguration(), function () use ($path) {
            $this->loadRoutesFrom(realpath($path.'routes/api.php'));
        });

        Route::group($this->routeDatatableConfiguration(), function () use ($path) {
            $this->loadRoutesFrom(realpath($path.'routes/datatable.php'));
        });
    }

    /**
     * Get the web route group configuration array.
     *
     * @return array
     */
    private function routeWebConfiguration()
    {
        return [
            'middleware' => 'web',
            'namespace'  => 'Fusion\Http\Controllers\Web',
        ];
    }

    /**
     * Get the API route group configuration array.
     *
     * @return array
     */
    private function routeAPIConfiguration()
    {
        return [
            'middleware' => ['api', 'auth:api'],
            'namespace'  => 'Fusion\Http\Controllers\API',
            'prefix'     => 'api',
        ];
    }

    /**
     * Get the datatable route group configuration array.
     *
     * @return array
     */
    private function routeDatatableConfiguration()
    {
        return [
            'middleware' => 'api',
            'namespace'  => 'Fusion\Http\Controllers\DataTable',
            'prefix'     => 'datatable',
        ];
    }

    /**
     * Register the package's route bindings.
     *
     * @return void
     */
    private function registerRouteBindings()
    {
        // Note: route binding for backup removal
        // TODO: point to correct disk if it changes from local storage
        Route::bind('backup', function ($filename) {
            return new Backup(Storage::disk('public'), "backups/{$filename}.zip");
        });

        Route::bind('fieldset', function($id) {
            return \Fusion\Models\Fieldset::findOrFail($id);
        });

        Route::bind('module', function($slug) {
            if (! \Caffeinated\Modules\Facades\Module::exists($slug)) {
                throw new \Caffeinated\Modules\Exceptions\ModuleNotFoundException($slug);
            }

            return \Caffeinated\Modules\Facades\Module::where('slug', $slug);
        });
    }

    /**
     * Register the package's route patterns.
     *
     * @return void
     */
    private function registerRoutePatterns()
    {
        Route::pattern('id', '[0-9]+');
        Route::pattern('slug', '[a-z0-9-]+');
        Route::pattern('handle', '[a-z0-9_]+');
        Route::pattern('username', '[a-z0-9_-]{3,16}');
    }

    /**
     * Return a list of bound services.
     *
     * @return array
     */
    public function provides()
    {
        return [
            'fusion'
        ];
    }
}