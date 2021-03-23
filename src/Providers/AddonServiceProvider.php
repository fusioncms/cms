<?php

namespace Fusion\Providers;

use Fusion\Facades\Menu;
use Fusion\Services\Addons\Addon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

abstract class AddonServiceProvider extends ServiceProvider
{
    /**
     * @var \Fusion\Services\Addons\Addon
     */
    protected $addon;

    /**
     * Artisan commands.
     *
     * @var array
     */
    protected $commands = [];

    /**
     * Event listeners.
     *
     * @var array
     */
    protected $listen = [];

    /**
     * Event subscribers.
     *
     * @var array
     */
    protected $subscribe = [];

    /**
     * Middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [];

    /**
     * Fieldtypes.
     *
     * @var array
     */
    protected $fieldtypes = [];

    /**
     * Admin Navigation.
     *
     * @var array
     */
    protected $navigation = [];

    /**
     * Admin scripts.
     * 
     * @var array
     */
    protected $scripts = [];

    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        if (!$this->addon = $this->getAddon()) {
            return;
        }

        $this->bootEvents();
        $this->bootSubscribers();
        $this->bootConfig();
        $this->bootCommands();
        $this->bootRoutes();
        $this->bootMigrations();
        $this->bootFactories();
        $this->bootViews();
        $this->bootTranslations();
        $this->bootAdminMenu();
        $this->bootAssets();
        $this->bootFieldtypes();
    }

    /**
     * Register event listeners.
     *
     * @return void
     */
    protected function bootEvents()
    {
        foreach ($this->listen as $event => $listeners) {
            foreach (Arr::wrap($listeners) as $listener) {
                Event::listen($event, $listener);
            }
        }
    }

    /**
     * Register event subscribers.
     *
     * @return void
     */
    protected function bootSubscribers()
    {
        foreach ($this->subscribe as $subscriber) {
            Event::subscribe($subscriber);
        }
    }

    /**
     * Merge configurations.
     *
     * @return void
     */
    protected function bootConfig()
    {
        $slug = $this->addon->getSlug();
        $path = $this->addon->getPath("config/{$slug}.php");

        if (file_exists($path)) {
            $this->mergeConfigFrom($path, $slug);
        }
    }

    /**
     * Register commands (console only).
     *
     * @return void
     */
    protected function bootCommands()
    {
        if ($this->app->runningInConsole()) {
            $this->commands($this->commands);
        }
    }

    /**
     * Register middleware router groups.
     *
     * @return void
     */
    protected function bootMiddleware()
    {
        foreach ($this->middlewareGroups as $group => $middleware) {
            foreach ($middleware as $class) {
                $this->app['router']->pushMiddlewareToGroup($group, $class);
            }
        }
    }

    /**
     * Register migrations.
     *
     * @return void
     */
    protected function bootMigrations()
    {
        $this->loadMigrationsFrom(
            $this->addon->getPath('database/migrations')
        );
    }

    /**
     * Register model factories.
     *
     * @return void
     */
    protected function bootFactories()
    {
        $this->loadFactoriesFrom(
            $this->addon->getPath('database/factories')
        );
    }

    /**
     * Register fieldtypes.
     *
     * @return void
     */
    protected function bootFieldtypes()
    {
        foreach ($this->fieldtypes as $fieldtype) {
            fieldtypes()->register($fieldtype);
        }
    }

    /**
     * Load in view templates.
     *
     * @return void
     */
    protected function bootViews()
    {
        if (file_exists($this->addon->getPath('resources/views'))) {
            $this->loadViewsFrom(
                $this->addon->getPath('resources/views'),
                Str::lower($this->addon->name),
            );
        }
    }

    /**
     * Register lang translations.
     *
     * @return void
     */
    protected function bootTranslations()
    {
        $slug = $this->addon->getSlug();
        $path = $this->addon->getPath('resources/lang');

        if (file_exists($path)) {
            $this->loadTranslationsFrom($path, $slug);
        }
    }

    /**
     * Register asset files.
     * 
     * @return void
     */
    protected function bootAssets()
    {
        //
    }

    /**
     * Append CP menu items.
     *
     * @return void
     */
    protected function bootAdminMenu()
    {
        $slug = $this->addon->getSlug();

        if (!Menu::has("admin.{$slug}")) {
            Menu::set('admin.addons', [
                'title'   => 'Addons',
                'divider' => true,
            ]);
        }

        Menu::set("admin.{$slug}", $this->navigation);
    }

    /**
     * Register routes.
     *
     * @return void
     */
    protected function bootRoutes()
    {
        $this->bootWebRoutes();
        $this->bootApiRoutes();
        $this->bootDataTableRoutes();
    }

    protected function bootWebRoutes()
    {
        if (file_exists($this->addon->getPath('routes/web.php'))) {
            Route::group([
                'middleware' => 'web',
                'namespace'  => $this->addon->namespace.'Http\\Controllers\Web',
            ], function () {
                $this->loadRoutesFrom($this->addon->getPath('routes/web.php'));
            });
        }
    }

    protected function bootApiRoutes()
    {
        if (file_exists($this->addon->getPath('routes/api.php'))) {
            Route::group([
                'middleware' => ['api', 'auth:sanctum'],
                'namespace'  => $this->addon->namespace.'Http\\Controllers\\API',
                'prefix'     => 'api',
            ], function () {
                $this->loadRoutesFrom($this->addon->getPath('routes/api.php'));
            });
        }
    }

    protected function bootDataTableRoutes()
    {
        if (file_exists($this->addon->getPath('routes/datatable.php'))) {
            Route::group([
                'middleware' => 'api',
                'namespace'  => $this->addon->namespace.'Http\\Controllers\DataTable',
                'prefix'     => 'datatable',
            ], function () {
                $this->loadRoutesFrom($this->addon->getPath('routes/datatable.php'));
            });
        }
    }

    /**
     * Returns Addon object.
     *
     * @return \Fusion\Services\Addons\Addon
     */
    private function getAddon()
    {
        // ..find matching service provider name..
        $addons = app('addons.manifest')->addons();
        $addon  = $addons->first(function ($addon) {
            return get_class($this) == $addon['provider'];
        });

        if ($addon) {
            return new Addon($addon);
        }
    }
}
