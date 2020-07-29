<?php

namespace Addons\Foobar\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Addons\Foobar\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the module.
     *
     * @return void
     */
    public function map()
    {
        $this->mapDatatableRoutes();
        $this->mapWebRoutes();
        $this->mapApiRoutes();
    }

    /**
     * Define the "datatable" routes for the module.
     *
     * @return void
     */
    protected function mapDatatableRoutes()
    {
        Route::group([
            'middleware' => 'api',
            'namespace'  => $this->namespace.'\DataTable',
            'prefix'     => 'datatable',
        ], function ($router) {
            require addon_path('Foobar/routes/datatable.php');
        });
    }

    /**
     * Define the "web" routes for the module.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::group([
            'middleware' => 'web',
            'namespace'  => $this->namespace.'\Web',
        ], function ($router) {
            require addon_path('Foobar/routes/web.php');
        });
    }

    /**
     * Define the "api" routes for the module.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::group([
            'middleware' => 'api',
            'namespace'  => $this->namespace.'\API',
            'prefix'     => 'api',
        ], function ($router) {
            require addon_path('Foobar/routes/api.php');
        });
    }
}
