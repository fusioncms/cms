<?php

namespace Fusion\Jobs;

use Throwable;
use Fusion\Facades\Composer;
use Fusion\Jobs\Backups\BackupRun;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;

class Update
{
    use Dispatchable;

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
        Bus::chain([
            /**
             * Make backup..
             */
            new BackupRun(['disable-notifications' => true]),

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
        ])->catch(function (Throwable $e) {
            $this->failed($e);
        })

        // aka, dispatch now!
        ->onConnection('sync')->dispatch();
    }

    /**
     * Handle a job failure.
     *
     * @throws \Throwable $exception
     * 
     * @return void
     */
    public function failed(Throwable $exception)
    {
        Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
