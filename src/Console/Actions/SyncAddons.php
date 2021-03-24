<?php

namespace Fusion\Console\Actions;

class SyncAddons
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        app('addons.manifest')->sync();
    }
}
