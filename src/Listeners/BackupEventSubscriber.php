<?php

namespace Fusion\Listeners;

use Fusion\Models\Backup;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;

class BackupEventSubscriber
{
    /**
     * @param \Spatie\Backup\Events\BackupWasSuccessful $event
     *
     * @return void
     */
    public function handleBackupSuccessful($event)
    {
        $newestBackup = $event->backupDestination->newestBackup();

        $backup = Backup::create([
            'name' => basename($newestBackup->path(), '.zip'),
            'disk' => $event->backupDestination->diskName(),
            'size' => $newestBackup->size(),
        ]);

        Log::channel('backups')->info('Backup Successful.', $backup->toArray());
    }

    /**
     * @param \Spatie\Backup\Events\BackupHasFailed $event
     *
     * @return void
     */
    public function handleBackupFailed($event)
    {
        Log::channel('backups')->error('Backup Failed.', [
            'disk'    => $event->backupDestination->diskName(),
            'message' => $event->exception->getMessage(),
        ]);
    }

    /**
     * @param \Spatie\Backup\Events\BackupManifestWasCreated $event
     *
     * @return void
     */
    public function handleBackupManifestCreated($event)
    {
        /**
         * Include `.env` variables
         *   from `config/backup.php`.
         */
        $dir  = pathinfo($event->manifest->path(), PATHINFO_DIRNAME);
        $json = collect(config('backup.backup.source.env'))
            ->mapWithKeys(function ($item) {
                return [$item => env($item)];
            })->toJson();

        File::put("{$dir}/env.json", $json);
    }

    /**
     * @param \Spatie\Backup\Events\BackupZipWasCreated $event
     *
     * @return void
     */
    public function handleBackupZipCreated($event)
    {
        //
    }

    /**
     * @param \Spatie\Backup\Events\CleanupWasSuccessful $event
     *
     * @return void
     */
    public function handleCleanupSuccessful($event)
    {
        Log::channel('backups')->error('Cleanup Successful.', [
            'disk'        => $event->backupDestination->diskName(),
            'usedStorage' => $event->backupDestination->usedStorage(),
        ]);
    }

    /**
     * @param \Spatie\Backup\Events\CleanupHasFailed $event
     *
     * @return void
     */
    public function handleCleanupFailed($event)
    {
        Log::channel('backups')->error('Cleanup Failed.', [
            'disk'    => $event->backupDestination->diskName(),
            'message' => $event->exception->getMessage(),
        ]);
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     *
     * @return void
     */
    public function subscribe($events)
    {
        $events->listen('Spatie\Backup\Events\BackupWasSuccessful',
            [BackupEventSubscriber::class, 'handleBackupSuccessful']);

        $events->listen('Spatie\Backup\Events\BackupHasFailed',
            [BackupEventSubscriber::class, 'handleBackupFailed']);

        $events->listen('Spatie\Backup\Events\BackupManifestWasCreated',
            [BackupEventSubscriber::class, 'handleBackupManifestCreated']);
    
        $events->listen('Spatie\Backup\Events\BackupZipWasCreated',
            [BackupEventSubscriber::class, 'handleBackupZipCreated']);

        $events->listen('Spatie\Backup\Events\CleanupWasSuccessful',
            [BackupEventSubscriber::class, 'handleCleanupSuccessful']);
    
        $events->listen('Spatie\Backup\Events\CleanupHasFailed',
            [BackupEventSubscriber::class, 'handleCleanupFailed']);
    }
}
