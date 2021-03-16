<?php

namespace Fusion\Providers;

use Fusion\Facades\Theme;
use Fusion\Models\Role;
use Fusion\Models\User;
use Fusion\Services\Addons\Manifest;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
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
        $this->bootMigrations();
        $this->bootViews();
        $this->bootRoutes();
        $this->bootGates();
        $this->bootCustomRules();

        if (app_installed()) {
            $this->bootTheme();
        }
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        if (!defined('FUSION_VERSION')) {
            define('FUSION_VERSION', '6.0.0-beta.10');
        }

        $this->registerAddonManifest();
        $this->registerProviders();
        $this->registerFusion();
        $this->registerMiddleware();

        $this->commands([
            \Fusion\Console\MakeThemeCommand::class,
            \Fusion\Console\UninstallCommand::class,
            \Fusion\Console\InstallCommand::class,
            \Fusion\Console\PublishCommand::class,
            \Fusion\Console\RefreshCommand::class,
            \Fusion\Console\FlushCommand::class,
            \Fusion\Console\SyncCommand::class,
            \Fusion\Console\UpdateCommand::class,

            // Addons
            \Fusion\Console\Addons\DiscoverCommand::class,
            \Fusion\Console\Addons\ListCommand::class,
            \Fusion\Console\Addons\UninstallCommand::class,
        ]);
    }

    /**
     * Register middleware.
     *
     * @return void
     */
    protected function registerMiddleware()
    {
        $kernel = $this->app->make(\Illuminate\Contracts\Http\Kernel::class);

        $kernel->appendMiddlewareToGroup('web', \Fusion\Http\Middleware\PasswordExpired::class);

        $kernel->prependMiddlewareToGroup('api', \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class);

        $kernel->pushMiddleware(\Fusion\Http\Middleware\DecodeFormData::class);
    }

    /**
     * Register the permission gates.
     *
     * @return void
     */
    protected function bootGates()
    {
        Gate::before(function (?User $user, $ability) {
            /**
             * Authenticated users undergo auth check
             *  based on their assigned Role.
             */
            if ($user) {
                return $user->isOwner() or
                       $user->hasPermissionTo($ability)
                       ? true : null;
            }

            /**
             * Unauthenticated users undergo auth check.
             *  based on `guest` Role.
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
    protected function bootCustomRules()
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
        $this->app->bind('fusion', function () {
            return new \Fusion\Fusion();
        });
    }

    private function registerAddonManifest()
    {
        $this->app->instance('addons.manifest', new Manifest(
            new Filesystem,
            $this->app->basePath(),
            $this->app->bootstrapPath().'/cache/addons.php'
        ));
    }

    /**
     * Register the package's supplied service providers.
     *
     * @return void
     */
    private function registerProviders()
    {
        $this->app->register(BladeServiceProvider::class);
        $this->app->register(ConfigServiceProvider::class);
        $this->app->register(EventServiceProvider::class);
        $this->app->register(FieldtypeServiceProvider::class);
        $this->app->register(MenuServiceProvider::class);
        $this->app->register(SettingServiceProvider::class);
        $this->app->register(ThemeServiceProvider::class);
        $this->app->register(ScheduleServiceProvider::class);

        // Not sure why Laravel doesn't register this against
        // the class name as well ¯\_(ツ)_/¯
        $this->app->singleton(\Illuminate\Database\Migrations\Migrator::class, function ($app) {
            return $app['migrator'];
        });

        // version history
        $this->app->singleton('version', function () {
            $versions = \Cache::remember('versions', 60 * 30, function () {
                $response = (new \GuzzleHttp\Client())
                    ->get(config('fusion.feeds.releases'))
                    ->getBody();

                return json_decode($response, true)['items'];
            });

            return new \Fusion\Services\Version($versions);
        });

        // package manager
        $this->app->singleton('fusion.composer', function () {
            return new \Fusion\Services\Composer();
        });
    }

    /**
     * Register FusionCMS' views with Laravel.
     *
     * @return void
     */
    private function bootViews()
    {
        View::getFinder()->prependLocation(fusion_path('resources/views'));
    }

    /**
     * Register the currently active theme.
     *
     * @return void
     */
    private function bootTheme()
    {
        Theme::activate(setting('system.theme'));
    }

    /**
     * Register the package's migrations.
     *
     * @return void
     */
    private function bootMigrations()
    {
        $this->loadMigrationsFrom(__DIR__.'/../../database/migrations');
    }

    /**
     * Register the package's routes.
     *
     * @return void
     */
    private function bootRoutes()
    {
        Route::mixin(new \Laravel\Ui\AuthRouteMethods());

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
        Route::aliasMiddleware('role', \Spatie\Permission\Middlewares\RoleMiddleware::class);
        Route::aliasMiddleware('permission', \Spatie\Permission\Middlewares\PermissionMiddleware::class);
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
            'fusion',
        ];
    }
}
