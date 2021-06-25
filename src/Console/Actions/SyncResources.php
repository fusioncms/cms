<?php

namespace Fusion\Console\Actions;

use Illuminate\Support\Facades\File;

class SyncResources
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        File::ensureDirectoryExists(public_path('vendor'));

        foreach ($this->links() as $target => $link) {
            if (file_exists($link) && !$this->isRemovableSymlink($link)) {
                continue;
            }

            if (is_link($link)) {
                File::delete($link);
            }

            File::link($target, $link);
        }
    }

    /**
     * Get the symbolic links that are configured for the application.
     *
     * @return array
     */
    protected function links()
    {
        $links = [
            fusion_path('public') => public_path('vendor/fusion'),
        ];

        $links = array_merge(
            $links,
            app('addons.manifest')->getResourceLinks()
        );

        return $links;
    }

    /**
     * Determine if the provided path is a symlink that can be removed.
     *
     * @param string $link
     * @param bool   $force
     *
     * @return bool
     */
    protected function isRemovableSymlink(string $link): bool
    {
        return is_link($link);
    }
}
