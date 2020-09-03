<?php

namespace Fusion\Jobs;

use Exception;
use Fusion\Facades\Composer;
use Fusion\Jobs\Backups\BackupRun;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class Update implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

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
             * Update to version
             */
            function() {
                Composer::update("fusioncms/cms:{$this->version}");
            },

            /**
             * Post update..
             */
            function() {
                Artisan::call('fusion:publish');
                Artisan::call('optimize:clear');
            }
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
