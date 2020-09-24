<?php

namespace Addons\Foobar\Providers;

use Fusion\Facades\Menu;
use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        Menu::set(['admin' => [
            'foobar' => [
                'title' => 'Foobar',
                'to'    => '/foobar',
                'icon'  => 'rocket',
                'children' => [
                    'dashboard' => [
                        'title' => 'Dashboard',
                        'to'    => '/foobar',
                    ]
                ],
            ]
        ]]);
    }
}
