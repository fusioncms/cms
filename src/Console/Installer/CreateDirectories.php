<?php

namespace Fusion\Console\Installer;

use Illuminate\Support\Facades\File;

class CreateDirectories
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        if (! File::exists(base_path('modules'))) {
            File::makeDirectory(base_path('modules'));
            File::put(base_path('modules/.gitkeep'), '');
        }

        if (! File::exists(base_path('themes'))) {
            File::makeDirectory(base_path('themes'));
            File::put(base_path('themes/.gitkeep'), '');
        }
    }
}
