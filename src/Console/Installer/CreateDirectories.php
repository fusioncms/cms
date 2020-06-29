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
        if (! File::exists(base_path('addons'))) {
            File::makeDirectory(base_path('addons'));
            File::put(base_path('addons/.gitignore'), "*\n!.gitignore");
        }

        if (! File::exists(base_path('themes'))) {
            File::makeDirectory(base_path('themes'));
            File::put(base_path('themes/.gitignore'), "*\n!.gitignore");
        }
    }
}
