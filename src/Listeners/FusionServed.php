<?php

namespace Fusion\Listeners;

use Fusion\Facades\Addon;
use Fusion\Jobs\LoadNavigation;

class FusionServed
{
    /**
     * Handle the event.
     *
     * @param Verified $verified
     *
     * @return void
     */
    public function handle()
    {
        LoadNavigation::dispatchNow();

        Addon::enabled()->each(function ($addon) {
            if (class_exists("Addons\\{$addon['namespace']}\\Jobs\\LoadNavigation")) {
                resolve("Addons\\{$addon['namespace']}\\Jobs\\LoadNavigation")::dispatchNow();
            }
        });
    }
}
