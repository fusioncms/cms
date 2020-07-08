<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteThemeAssets
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $path = public_path('assets/theme');

        File::delete($path);
    }
}
