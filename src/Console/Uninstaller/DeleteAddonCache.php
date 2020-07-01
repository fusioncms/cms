<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteAddonCache
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::delete(storage_path('app/addons.json'));
    }
}
