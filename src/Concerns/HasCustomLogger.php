<?php

namespace Fusion\Concerns;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Monolog\Formatter\JsonFormatter;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;

trait HasCustomLogger
{
    /**
     * Custom log file instance.
     *
     * @param string $file
     * @param mixed  $disk
     *
     * @return Monolog\Logger
     */
    protected function logToFile($file, $disk = null)
    {
        $disk     = $disk ?? config('filesystems.default');
        $fullPath = Storage::disk($disk)->path($file);

        File::ensureDirectoryExists(
            File::dirname($fullPath)
        );

        $stream = new StreamHandler($fullPath);
        $stream->setFormatter(new JsonFormatter());

        return new Logger(
            File::basename($fullPath),
            [$stream]
        );
    }
}
