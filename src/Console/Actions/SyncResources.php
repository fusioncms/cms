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
            try {
                if (!file_exists($link) && file_exists($target)) {
                    File::link($target, $link);
                }
            } catch (\Exception $e) {
                dd($e->getMessage(), $target, File::exists($target), $link, File::exists($link));
            }
        }
    }

    /**
     * Get the symbolic links that are configured for the application.
     *
     * @return array
     */
    protected function links()
    {
        // Fusion..
        $links = [
            fusion_path('public') => public_path('vendor/fusion'),
        ];

        // Addons..
        $links = array_merge(
            $links,
            app('addons.manifest')->getResourceLinks()
        );

        return $links;
    }
}
