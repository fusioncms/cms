<?php

namespace Fusion\Concerns;

use Illuminate\Support\Facades\File;
use Symfony\Component\Finder\Finder;

trait CleansDirectories
{
    /**
     * Remove all files and folders, ignoring `dot` files.
     *
     * @param string $directory
     *
     * @return void
     */
    protected function cleanDirectory($directory)
    {
        if (File::isDirectory($directory)) {
            $files = Finder::create()->in($directory);
            $paths = [];

            foreach ($files as $file) {
                $paths[] = $file->getPathname();
            }

            File::delete($paths);
        }
    }
}
