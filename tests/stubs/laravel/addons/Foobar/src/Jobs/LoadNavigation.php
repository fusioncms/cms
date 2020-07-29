<?php

namespace Addons\Foobar\Jobs;

use Illuminate\Foundation\Bus\Dispatchable;
use Menu;

class LoadNavigation
{
    use Dispatchable;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($menu = Menu::get('admin')) {
            $menu->add('Foobar')->data([
                'to'    => '/foobar',
                'icon'  => 'rocket',
            ]);

            $menu->foobar->add('Dashboard')->data([
                'to' => '/foobar',
            ]);
        }
    }
}
