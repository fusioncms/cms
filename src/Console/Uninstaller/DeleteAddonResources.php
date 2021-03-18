<?php

namespace Fusion\Console\Uninstaller;

use File;

class DeleteAddonResources
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $links = app('addons.manifest')->getResourceLinks();

        foreach ($links as $target => $link) {
            File::delete($link);
        }
    }
}
