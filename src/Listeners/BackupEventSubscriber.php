<?php

namespace Fusion\Listeners;

use Carbon\Carbon;
use Fusion\Models\Backup;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;

class BackupEventSubscriber
{
    // ------------------------------------------------
    // BACKUP
    // ------------------------------------------------

    /**
     * @param \Fusion\Events\Backups\BackupStarted $event
     *
     * @return void
     */
    public function handleBackupStarted($event)
    {
        $disks    = is_null($event->disks) ? config('backup.backup.destination.disks') : [$event->disks];
        $filename = basename($event->filename, '.zip');

        foreach ($disks as $disk) {
            $backup = Backup::create([
                'name'  => $filename,
                'disk'  => $disk,
                'state' => Backup::IN_PROGRESS,
            ]);

            Log::channel('backups')
                ->info('Backup Started.', $backup->toArray());
        }
    }

    /**
     * @param \Fusion\Events\Backups\BackupFinished $event
     *
     * @return void
     */
    public function handleBackupFinished($event)
    {
        $disks    = is_null($event->disks) ? config('backup.backup.destination.disks') : [$event->disks];
        $filename = basename($event->filename, '.zip');

        foreach ($disks as $disk) {
            $backup = Backup::firstOrCreate([
                'name' => $filename,
                'disk' => $disk
            ]);

            if ($backup->state == Backup::IN_PROGRESS) {
                $backup->update(['state' => Backup::FAILURE]);
            }

            Log::channel('backups')
                ->info('Backup Finished.', $backup->fresh()->toArray());
        }
    }

    /**
     * @param \Spatie\Backup\Events\BackupWasSuccessful $event
     *
     * @return void
     */
    public function handleBackupSuccessful($event)
    {
        $newestBackup = $event->backupDestination->newestBackup();
        $filename     = basename($newestBackup->path(), '.zip');
        $diskName     = $event->backupDestination->diskName();

        $backup = Backup::updateOrCreate([
            'name' => $filename,
            'disk' => $diskName,
        ]);

        $backup->update([
            'size'     => $newestBackup->size(),
            'location' => $newestBackup->path(),
            'state'    => Backup::SUCCESS,
        ]);

        Log::channel('backups')
            ->info('Backup Successful.', $backup->toArray());
    }

    /**
     * @param \Spatie\Backup\Events\BackupHasFailed $event
     *
     * @return void
     */
    public function handleBackupFailed($event)
    {
        Log::channel('backups')->error('Backup Failed.', [
            'disk'    => optional($event->backupDestination)->diskName(),
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
        //
    }

    /**
     * Add ENV variables to backup zip.
     * 
     * @param \Spatie\Backup\Events\BackupZipWasCreated $event
     *
     * @return void
     */
    public function handleBackupZipCreated($event)
    {
        $zipArchive = new \ZipArchive();

        if ($zipArchive->open($event->pathToZip) === true) {
            $zipArchive->addFromString('fusion-dumps/env.json',
                collect(config('backup.backup.source.env'))
                    ->mapWithKeys(function ($item) {
                        return [$item => env($item)];
                    })->toJson());
        }

        $zipArchive->close();
    }

    // ------------------------------------------------
    // CLEANUP
    // ------------------------------------------------

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
        $events->listen('Fusion\Events\Backups\BackupStarted',
            [BackupEventSubscriber::class, 'handleBackupStarted']);

        $events->listen('Fusion\Events\Backups\BackupFinished',
            [BackupEventSubscriber::class, 'handleBackupFinished']);

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
