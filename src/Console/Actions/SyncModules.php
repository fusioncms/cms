<?php

namespace Fusion\Console\Actions;

use Illuminate\Support\Facades\File;
use Fusion\Concerns\CleansDirectories;
use Caffeinated\Modules\Facades\Module;

class SyncModules
{
    use CleansDirectories;

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        // Clean..
        $this->cleanDirectory(public_path('modules'));
        $this->cleanDirectory(fusion_path('settings/modules'));

        // Re-sync..
        Module::all()->each(function($module) {
            if ($module['registered'] && $module['installed']) {
                // publish assets..
                $this->symlink(
                    public_path("modules/{$module['slug']}"),
                    base_path("modules/{$module['basename']}/public")
                );

                // publish settings..
                $this->symlink(
                    fusion_path("settings/modules/{$module['slug']}.php"),
                    base_path("modules/{$module['basename']}/settings.php")
                );
            }
        });
    }

    /**
     * Create symlink (if one doesn't exist).
     *
     * @return array
     */
    protected function symlink($link, $target)
    {
        if (! file_exists($link) && file_exists($target)) {
            File::link($target, $link);
        }
    }
}
