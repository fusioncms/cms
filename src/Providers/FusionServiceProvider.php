<?php

namespace Fusion\Providers;

use Fusion\Models\User;
use Fusion\Models\Role;
use Fusion\Facades\Addon;
use Fusion\Facades\Theme;
use Fusion\Models\Mailable;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

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
        $this->registerCustomRules();

        if (app_installed()) {
            $this->registerAddons();
            $this->registerTheme();
        }
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

        $kernel = $this->app->make(\Illuminate\Contracts\Http\Kernel::class);
        $kernel->prependMiddlewareToGroup('api', \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class);

        $this->commands([
            \Fusion\Console\AddonsDiscoverCommand::class,
            \Fusion\Console\MakeAddonCommand::class,
            \Fusion\Console\MakeThemeCommand::class,
            \Fusion\Console\UninstallCommand::class,
            \Fusion\Console\InstallCommand::class,
            \Fusion\Console\PublishCommand::class,
            \Fusion\Console\RefreshCommand::class,
            \Fusion\Console\FlushCommand::class,
            \Fusion\Console\SyncCommand::class,
        ]);
    }

    /**
     * Register the permission gates.
     *
     * @return void
     */
    protected function registerGates()
    {
        Gate::before(function (?User $user, $ability) {
            /**
             * Authenticated users undergo auth check
             *  based on their assigned Role.
             *
             */
            if ($user) {
                return $user->isOwner() or
                       $user->hasPermissionTo($ability)
                       ? true : null;
            }

            /**
             * Unauthenticated users undergo auth check.
             *  based on `guest` Role.
             *
             */
            return Role::whereName('guest')
                ->firstOrFail()
                ->hasPermissionTo($ability);
        });
    }

    /**
     * Register custom rule extensions.
     *
     * @return void
     */
    protected function registerCustomRules()
    {
        Validator::extend('securepassword', 'Fusion\Rules\SecurePassword@passes');
        Validator::extend('serverrequirements', 'Fusion\Rules\ServerRequirements@passes');
        Validator::extend('permissionrequirements', 'Fusion\Rules\PermissionRequirements@passes');
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
        $this->app->register(AddonServiceProvider::class);
        $this->app->register(BladeServiceProvider::class);
        $this->app->register(EventServiceProvider::class);
        $this->app->register(SettingsServiceProvider::class);
        $this->app->register(FieldtypeServiceProvider::class);
        $this->app->register(ThemeServiceProvider::class);
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

    /**
     * Register the available addons.
     *
     * @return void
     */
    private function registerAddons()
    {
        Addon::register();
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
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
    }

    /**
     * Register the package's config.
     *
     * @return void
     */
    private function registerConfig()
    {
        $this->mergeConfigFile(
            __DIR__.'/../../config/session.php', 'session'
        );

        $this->mergeConfigFile(
            __DIR__.'/../../config/analytics.php', 'analytics'
        );

        $this->mergeConfigFile(
            __DIR__.'/../../config/fusion.php', 'fusion'
        );

        $this->mergeConfigFile(
            __DIR__.'/../../config/installer.php', 'installer'
        );

        $this->mergeConfigFile(
            __DIR__.'/../../config/permission.php', 'permission'
        );

        $this->mergeConfigFile(
            __DIR__.'/../../config/sanctum.php', 'sanctum'
        );
    }

    /**
     * Merge in `fusioncms` config values.
     *
     * @param  string $key
     * @param  string $path
     * @return void
     */
    private function mergeConfigFile($path, $key)
    {
        $this->app['config']->set($key, array_merge(
            $this->app['config']->get($key, []), require $path
        ));
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
        $this->registerRouteMiddleware();

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
            'middleware' => ['api', 'auth:sanctum'],
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
            return new \Spatie\Backup\BackupDestination\Backup(Storage::disk('public'), "backups/{$filename}.zip");
        });

        Route::bind('fieldset', function($id) {
            return \Fusion\Models\Fieldset::findOrFail($id);
        });

        Route::bind('addon', function($slug) {
            return \Fusion\Models\Addon::where('slug', $slug)->firstOrFail();
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
     * Register the package's route middleware.
     *
     * @return void
     */
    private function registerRouteMiddleware()
    {
        Route::aliasMiddleware('role',               \Spatie\Permission\Middlewares\RoleMiddleware::class);
        Route::aliasMiddleware('permission',         \Spatie\Permission\Middlewares\PermissionMiddleware::class);
        Route::aliasMiddleware('role_or_permission', \Spatie\Permission\Middlewares\RoleOrPermissionMiddleware::class);
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