<?php

namespace Fusion\Concerns;

use Illuminate\Support\Str;
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
     * @param string $path
     *
     * @return Monolog\Logger
     */
    protected function logToFile($path)
    {
        $fullpath = Storage::path($path);

        File::ensureDirectoryExists(
            File::dirname($fullpath));

        $stream = new StreamHandler($fullpath);
        $stream->setFormatter(new JsonFormatter());

        return new Logger(
            File::basename($fullpath), [$stream]);
    }
}
