<?php

namespace Fusion\Providers;

use Fusion\Facades\Menu;
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
	 * Publishable javascript
	 * 
	 * @var array
	 */
	protected $scripts = [];

	/**
	 * Publishable stylesheets
	 * 
	 * @var array
	 */
	protected $stylesheets = [];

	/**
	 * Admin Navigation.
	 * 
	 * @var array
	 */
	protected $navigation = [];

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
		$this->bootConfig();
		$this->bootCommands();
		$this->bootRoutes();
		$this->bootMigrations();
		$this->bootFieldtypes();
		$this->bootViews();
		$this->bootTranslations();
		$this->bootAdminMenu();
		$this->bootScripts();
		$this->bootStylesheets();
    }

    protected function bootEvents()
    {
    	foreach ($this->listen as $event => $listeners) {
    		foreach ($listeners as $listener) {
                Event::listen($event, $listener);
            }
    	}

    	foreach ($this->subscribe as $subscriber) {
            Event::subscribe($subscriber);
        }
    }

    protected function bootConfig()
    {
    	$slug   = $this->addon->getSlug();
    	$config = $this->addon->getPath("config/{$slug}.php");

    	if (file_exists($config)) {
    		$this->mergeConfigFrom($config, $slug);
    	}
    }

    protected function bootCommands()
    {
    	if ($this->app->runningInConsole()) {
    		$this->commands($this->commands);
    	}
    }

    protected function bootMiddleware()
    {
        foreach ($this->middlewareGroups as $group => $middleware) {
            foreach ($middleware as $class) {
                $this->app['router']->pushMiddlewareToGroup($group, $class);
            }
        }
    }

    protected function bootMigrations()
    {
        $this->loadMigrationsFrom(
        	$this->addon->getPath('database/migrations')
        );
    }

    protected function bootFieldtypes()
	{
		foreach ($this->fieldtypes as $fieldtype) {
			fieldtypes()->register($fieldtype);
		}
	}

	protected function bootViews()
	{
		if (file_exists($this->addon->getPath('resources/views'))) {
			$this->loadViewsFrom(
				$this->addon->getPath('resources/views'),
				Str::lower($this->addon->name),
			);
		}
	}

	protected function bootTranslations()
	{
		$slug = $this->addon->getSlug();
		$path = $this->addon->getPath('resources/lang');

		if (file_exists($path)) {
			$this->loadTranslationsFrom($path, $slug);
		}
	}

	protected function bootScripts()
	{
		$slug = $this->addon->getSlug();

		foreach ($this->scripts as $path) {
			if (file_exists($path)) {
				$filename = pathinfo($path, PATHINFO_FILENAME);

				$this->publishes([
					$path => public_path("vendor/{$slug}/js/{$filename}.js")
				], $slug);
			}
		}
	}

	protected function bootStylesheets()
	{
		$slug = $this->addon->getSlug();

		foreach ($this->stylesheets as $path) {
			if (file_exists($path)) {
				$filename = pathinfo($path, PATHINFO_FILENAME);

				$this->publishes([
					$path => public_path("vendor/{$slug}/css/{$filename}.css")
				], $slug);
			}
		}
	}

	protected function bootAdminMenu()
	{
		$slug = $this->addon->getSlug();

		// Menu::set("admin.addons", [
		// 	'title'   => 'Addons',
		// 	'divider' => true,
		// ]);

		Menu::set("admin.{$slug}", $this->navigation);
	}

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
				'namespace'  => $this->addon->namespace.'\\Http\\Controllers\Web',
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
			    'namespace'  => $this->addon->namespace.'\\Http\\Controllers\API',
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
	            'namespace'  => $this->addon->namespace.'\\Http\\Controllers\DataTable',
	            'prefix'     => 'datatable',
	        ], function () {
				$this->loadRoutesFrom($this->addon->getPath('routes/datatable.php'));
			});
		}
    }

    /**
     * Retrieve Addon object.
     * 
     * @return \Fusion\Services\Addons\Addon
     */
    private function getAddon()
    {
    	$name = Str::lower(explode('\\', get_class($this))[1]);

    	return app('addons.manifest')->getAddon($name);
    }
}
