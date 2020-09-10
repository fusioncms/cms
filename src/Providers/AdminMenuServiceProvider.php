<?php

namespace Fusion\Providers;

use Fusion\Facades\Menu;
use Fusion\Models\Matrix;
use Fusion\Models\Taxonomy;
use Illuminate\Support\ServiceProvider;

class AdminMenuServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Menu::set(['admin' => $this->adminNavigation()]);
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('fusion.menu', function () {
            return new \Fusion\Services\Menu;
        });
    }

    /**
     * Generate Admin Navigation.
     * 
     * @return array
     */
    private function adminNavigation()
    {
        $matrices   = Matrix::where('sidebar', true)->where('parent_id', 0)->orderBy('name')->get();
        $taxonomies = Taxonomy::where('sidebar', true)->orderBy('name')->get();
       
        $items = collect([
            'dashboard' => [
                'title' => 'Dashboard',
                'to'    => '/',
                'icon'  => 'grip-horizontal',
            ],
            'filemanager' => [
                'title' => 'File Manager',
                'to'    => '/files',
                'icon'  => 'images',
            ],
            'inbox' => [
                'title' => 'Inbox',
                'to'    => '/inbox',
                'icon'  => 'inbox',
            ]
        ]);

        if ($matrices->count()) {
            $items->put('content', [
                'title'    => 'Content',
                'divider'  => true,
                'children' => $matrices->mapWithKeys(function($item) {
                    if ($item->has('children') and $item->children->count()) {
                        return [$item->handle => [
                            'title'    => $item->name,
                            'to'       => '#',
                            'icon'     => $item->icon ?: 'pencil-alt',
                            'children' => [],
                        ]];
                    }

                    return [$item->handle => [
                        'title' => $item->name,
                        'to'    => $item->adminPath,
                        'icon'  => $item->icon ?: 'pencil-alt',
                    ]];
                })->toArray()
            ]);
        }
// dd($items->toArray());
        return $items->toArray();
    }
}
