<?php

namespace Fusion\Jobs\Backups;

use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;
use Spatie\Backup\BackupDestination\BackupDestination;
use Throwable;

class BackupSync
{
    use Dispatchable;
    use Queueable;

    /**
     * @var \Spatie\Backup\BackupDestination\BackupDestination
     */
    public $backupDestination;

    /**
     * Creates new instance.
     *
     * @param \Spatie\Backup\BackupDestination\BackupDestination $backupDestination
     */
    public function __construct(BackupDestination $backupDestination)
    {
        $this->backupDestination = $backupDestination;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $disk = $this->backupDestination->diskName();

        Backup::where(['disk' => $disk])->each(function ($backup) {
            if (!$backup->exists()) {
                $backup->delete();
            }
        });
    }

    /**
     * The job failed to process.
     *
     * @param \Throwable $exception
     *
     * @return void
     */
    public function failed(Throwable $exception)
    {
        Log::error('There was an error trying to sync `backups` table: '.$exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
