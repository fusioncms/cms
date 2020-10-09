<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Spatie\TemporaryDirectory\TemporaryDirectory;

class RestoreEnvVariables
{
    use Dispatchable;
    use Queueable;

    /**
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * Constructor.
     *
     * @param Backup $backup
     */
    public function __construct(TemporaryDirectory $tempDirectory)
    {
        $this->tempDirectory = $tempDirectory;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $envPath = $this->tempDirectory->path('fusion-dumps/env.json');

        if (File::exists($envPath)) {
            // Setup..
            $envContents  = File::get(app()->environmentFilePath());
            $varsContents = File::get($envPath);
            $variables    = collect(json_decode($varsContents));

            // Perform surgery..
            $variables->each(function ($value, $key) use (&$envContents) {
                $envContents = preg_replace("/^({$key})=([^\r\n]*)$/m", "$1={$value}", $envContents);
            });

            // Override .env file with updated variables
            File::put(app()->environmentFilePath(), $envContents);
        }
    }

    /**
     * The job failed to process.
     *
     * @param Exception $exception
     *
     * @return void
     */
    public function failed(Exception $exception)
    {
        Log::error('There was an error trying to restore from a backup: ', $exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
