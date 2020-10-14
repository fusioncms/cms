<?php

namespace Fusion\Jobs;

use Exception;
use Fusion\Facades\Composer;
use Fusion\Jobs\Backups\Backup\BackupRun;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class Update
{
    use Dispatchable;
    use Queueable;

    /**
     * Requested version.
     *
     * @var string
     */
    public $version;

    /**
     * Constructor.
     *
     * @param string $version
     */
    public function __construct($version)
    {
        $this->version = $version;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        BackupRun::withChain([
            /**
             * Version update..
             */
            function () {
                Composer::update("fusioncms/cms:{$this->version}");
            },

            /**
             * Post update..
             */
            function () {
                Artisan::call('fusion:flush');
                Artisan::call('fusion:sync');
                Artisan::call('fusion:publish');
                Artisan::call('migrate');
            },
        ])->dispatch();
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
        Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
