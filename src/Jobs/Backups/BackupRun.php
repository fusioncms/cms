<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;

class BackupRun implements ShouldQueue
{
    use Dispatchable;
    use Queueable;

    /**
     * Backup disk (optional).
     *
     * @var string
     */
    protected $disk;

    /**
     * Constructor.
     *
     * @param string $disk
     */
    public function __construct($disk = null)
    {
        $this->disk = $disk;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('backup:run', [
            '--only-to-disk'   => $this->disk,
            '--no-interaction' => true,
            '--quiet'          => true,
        ]);
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
        Log::error('There was an error trying to backup FusionCMS: ', $exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
