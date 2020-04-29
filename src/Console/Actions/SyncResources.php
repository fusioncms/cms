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
        foreach ($this->links() as $link => $target) {
            if (file_exists($link)) {
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
        return [
            public_path('vendor/fusion') => fusion_path('public'),
        ];
    }
}