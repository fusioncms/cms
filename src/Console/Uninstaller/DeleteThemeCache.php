<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteThemeCache
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::deleteDirectory(storage_path('app/themes'));
    }
}
