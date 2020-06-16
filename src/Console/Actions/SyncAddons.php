<?php

namespace Fusion\Console\Actions;

use Artisan;

class SyncAddons
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('addons:discover');
    }
}
