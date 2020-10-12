<?php

namespace Fusion\Console\Installer;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CreateDirectories
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        if (!File::exists(base_path('addons'))) {
            File::makeDirectory(base_path('addons'));
            File::put(base_path('addons/.gitignore'), "*\n!.gitignore");
        }

        if (!File::exists(base_path('themes'))) {
            File::makeDirectory(base_path('themes'));
            File::put(base_path('themes/.gitignore'), "*\n!.gitignore");
        }

        if (!File::exists(storage_path('app/themes'))) {
            File::makeDirectory(storage_path('app/themes'));
            File::put(storage_path('app/themes/.gitignore'), "*\n!.gitignore");
        }

        // File Manager
        if (!Storage::disk('public')->exists('files')) {
            Storage::disk('public')->makeDirectory('files');
        }
    }
}
