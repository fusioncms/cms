<?php

namespace Fusion\Console\Uninstaller;

use Fusion\Concerns\CleansDirectories;

class DeleteDirectories
{
    use CleansDirectories;

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
        $this->cleanDirectory(base_path('modules'));
        $this->cleanDirectory(public_path('modules'));
    }

    /**
     * Delete the theme-specific directories used by
     * FusionCMS.
     *
     * @return void
     */
    private function deleteThemeDirectories()
    {
        $this->cleanDirectory(base_path('themes'));
        $this->cleanDirectory(public_path('themes'));
    }
}
