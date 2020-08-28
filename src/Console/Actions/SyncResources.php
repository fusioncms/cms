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
        // dd($this->links());

        foreach ($this->links() as $link => $target) {
            try {
                if (!file_exists($link) && file_exists($target)) {
                    File::link($target, $link);
                }
            } catch (\Exception $e) {
                // dd($e->getMessage(), $target, File::exists($target), $link, File::exists($link));
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
        return [
            public_path('vendor/fusion') => fusion_path('public'),
        ];
    }
}
