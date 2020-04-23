<?php

namespace Fusion\Console\Uninstaller;

use Illuminate\Support\Facades\File;

class DeleteDirectories
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        if (File::exists(base_path('modules'))) {
            File::deleteDirectory(base_path('modules'));
        }

        if (File::exists(base_path('themes'))) {
            File::deleteDirectory(base_path('themes'));
        }
    }
}
