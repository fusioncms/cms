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
        $this->deleteModuleDirectories();
        $this->deleteThemeDirectories();
    }

    /**
     * Delete the module-specific directories used by
     * FusionCMS.
     *
     * @return void
     */
    private function deleteModuleDirectories()
    {
        if (File::exists(base_path('modules'))) {
            File::deleteDirectory(base_path('modules'));
        }

        if (File::exists(public_path('modules'))) {
            File::deleteDirectory(public_path('modules'));
        }
    }

    /**
     * Delete the theme-specific directories used by
     * FusionCMS.
     *
     * @return void
     */
    private function deleteThemeDirectories()
    {
        if (File::exists(base_path('themes'))) {
            File::deleteDirectory(base_path('themes'));
        }

        if (File::exists(public_path('themes'))) {
            File::deleteDirectory(public_path('themes'));
        }
    }
}
