<?php

namespace Fusion\Listeners;

use Fusion\Concerns\HasCustomLogger;
use Fusion\Models\Backup;
use Illuminate\Support\Facades\Log;

class BackupEventSubscriber
{
    use HasCustomLogger;

    // ------------------------------------------------
    // BACKUP
    // ------------------------------------------------

    /**
     * @param \Fusion\Events\Backups\Backup\Started $event
     *
     * @return void
     */
    public function handleBackupStarted($event)
    {
        $name = basename($event->filename, '.zip');

        foreach ($event->disks as $disk) {
            $backup = Backup::create([
                'name'     => $name,
                'disk'     => $disk,
                'state'    => Backup::IN_PROGRESS,
                'log_path' => ($path = "logs/backups/{$name}.log"),
            ]);

            $this
                ->logToFile($path, $disk)
                ->info('Backup Started.', $backup->toArray());
        }
    }

    /**
     * @param \Fusion\Events\Backups\Backup\Finished $event
     *
     * @return void
     */
    public function handleBackupFinished($event)
    {
        foreach ($event->disks as $disk) {
            $backup = Backup::where([
                'name' => basename($event->filename, '.zip'),
                'disk' => $disk,
            ])->firstOrFail();

            if ($backup->state == Backup::IN_PROGRESS) {
                $backup->update(['state' => Backup::FAILURE]);

                $this
                    ->logToFile($backup->log_path, $disk)
                    ->info('Backup has failed.', $backup->toArray());
            }
        }
    }

    /**
     * @param \Fusion\Events\Backups\Backup\Updated $event
     *
     * @return void
     */
    public function handleBackupUpdated($event)
    {
        $backup = $event->backup;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info("Backup name updated [{$backup->name}].", []);
    }

    /**
     * @param \Spatie\Backup\Events\BackupWasSuccessful $event
     *
     * @return void
     */
    public function handleBackupSuccessful($event)
    {
        $newestBackup = $event->backupDestination->newestBackup();

        $backup = Backup::where([
            'name' => basename($newestBackup->path(), '.zip'),
            'disk' => $event->backupDestination->diskName(),
        ])->firstOrFail();

        $backup->update([
            'size'     => $newestBackup->size(),
            'location' => $newestBackup->path(),
            'state'    => Backup::SUCCESS,
        ]);

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Backup was successful.', $backup->toArray());
    }

    /**
     * @param \Spatie\Backup\Events\BackupHasFailed $event
     *
     * @return void
     */
    public function handleBackupFailed($event)
    {
        Log::error('Backup has failed.', [
            'disk'    => optional($event->backupDestination)->diskName(),
            'message' => $event->exception->getMessage(),
        ]);
    }

    /**
     * @param \Spatie\Backup\Events\BackupManifestWasCreated $event
     *
     * @return void
     */
    public function handleManifestCreated($event)
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
            $zipArchive->addFromString(
                'fusion-dumps/env.json',
                collect(config('backup.backup.source.env'))
                    ->mapWithKeys(function ($item) {
                        return [$item => env($item)];
                    })->toJson()
            );
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
        Log::info('Backup cleanup was successfully.', [
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
        Log::error('Backup cleanup has failed.', [
            'disk'    => optional($event->backupDestination)->diskName(),
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
        $events->listen(
            'Fusion\Events\Backups\Backup\Started',
            [BackupEventSubscriber::class, 'handleBackupStarted']
        );

        $events->listen(
            'Fusion\Events\Backups\Backup\Finished',
            [BackupEventSubscriber::class, 'handleBackupFinished']
        );

        $events->listen(
            'Fusion\Events\Backups\Backup\Updated',
            [BackupEventSubscriber::class, 'handleBackupUpdated']
        );

        $events->listen(
            'Spatie\Backup\Events\BackupWasSuccessful',
            [BackupEventSubscriber::class, 'handleBackupSuccessful']
        );

        $events->listen(
            'Spatie\Backup\Events\BackupHasFailed',
            [BackupEventSubscriber::class, 'handleBackupFailed']
        );

        $events->listen(
            'Spatie\Backup\Events\BackupManifestWasCreated',
            [BackupEventSubscriber::class, 'handleManifestCreated']
        );

        $events->listen(
            'Spatie\Backup\Events\BackupZipWasCreated',
            [BackupEventSubscriber::class, 'handleBackupZipCreated']
        );

        $events->listen(
            'Spatie\Backup\Events\CleanupWasSuccessful',
            [BackupEventSubscriber::class, 'handleCleanupSuccessful']
        );

        $events->listen(
            'Spatie\Backup\Events\CleanupHasFailed',
            [BackupEventSubscriber::class, 'handleCleanupFailed']
        );
    }
}
