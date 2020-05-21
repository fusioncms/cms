<?php

namespace Fusion\Console\Installer;

use Fusion\Console\Actions\SyncPermissions;

class CreateDefaultPermissions
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
    	dispatch(new SyncPermissions);
    }
}
