<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\File;
use Spatie\TemporaryDirectory\TemporaryDirectory;

class RestoreEnvVariables
{
    use Dispatchable;
    use Queueable;

    /**
     * @var \Fusion\Models\Backup
     */
    protected $backup;

    /**
     * @var TemporaryDirectory
     */
    protected $tempDirectory;

    /**
     * Constructor.
     *
     * @param \Fusion\Models\Backup                         $backup
     * @param \Spatie\TemporaryDirectory\TemporaryDirectory $tempDirectory
     */
    public function __construct(Backup $backup, TemporaryDirectory $tempDirectory)
    {
        $this->backup        = $backup;
        $this->tempDirectory = $tempDirectory;
    }

    /**
     * Execute the job.
     *
     * @throws Exception
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
        } else {
            throw new Exception('Unable to locate backup env.json file.');
        }
    }
}
