<?php

namespace Modules\BetaModule\Jobs;

use Menu;
use Illuminate\Foundation\Bus\Dispatchable;

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
            $menu->add('Beta')->data([
                'to'    => '/beta',
                'icon'  => 'rocket'
            ]);

            $menu->beta->add('Dashboard')->data([
                'to' => '/beta',
            ]);
        }
    }
}
