<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteAddonAssets
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = public_path('assets/addons');

        File::deleteDirectory($path);
    }
}
