<?php

namespace Fusion\Listeners;

use Fusion\Concerns\HasCustomLogger;
use Fusion\Jobs\Backups\BackupSync;
use Fusion\Models\Backup;
use Illuminate\Support\Facades\Log;

class BackupEventSubscriber
{
    use HasCustomLogger;

    // ------------------------------------------------
    // BACKUP
    // ------------------------------------------------

    /**
     * @param \Fusion\Events\Backups\Backup\HasStarted $event
     *
     * @return void
     */
    public function handleBackupStarted($event)
    {
        foreach ($event->disks as $disk) {
            $backup = Backup::create([
                'name'     => ($name = basename($event->filename, '.zip')),
                'disk'     => $disk,
                'state'    => Backup::IN_PROGRESS,
                'size'     => 0,
                'location' => config('backup.backup.name').'/'.$event->filename,
                'log_path' => ($path = "logs/backups/{$name}.log"),
            ]);

            $this
                ->logToFile($path, $disk)
                ->info('Backup Started.', $backup->toArray());
        }
    }

    /**
     * @param \Fusion\Events\Backups\Backup\HasFinished $event
     *
     * @return void
     */
    public function handleBackupFinished($event)
    {
        $name = basename($event->filename, '.zip');

        foreach ($event->disks as $disk) {
            $backup = Backup::resolve($name, $disk);

            if ($backup->exists()) {
                $backup->update([
                    'size'  => $backup->backup()->size(),
                    'state' => Backup::SUCCESS,
                ]);

                $this
                    ->logToFile($backup->log_path, $disk)
                    ->info('Backup was successful.', $backup->toArray());
            } else {
                $backup->update(['state' => Backup::FAILURE]);

                $this
                    ->logToFile($backup->log_path, $disk)
                    ->info('Backup has failed.', $backup->toArray());
            }
        }
    }

    /**
     * @param \Fusion\Events\Backups\Backup\WasUpdated $event
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
        Log::info('Backup was successful.', [
            'disk' => $event->backupDestination->diskName(),
        ]);
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
        BackupSync::dispatchNow($event->backupDestination);
    }

    /**
     * @param \Spatie\Backup\Events\CleanupHasFailed $event
     *
     * @return void
     */
    public function handleCleanupFailed($event)
    {
        if ($destination = $event->backupDestination) {
            BackupSync::dispatchNow($destination);
        } else {
            Log::error('Backup cleanup has failed.', [
                'message' => $event->exception->getMessage(),
            ]);
        }
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
            'Fusion\Events\Backups\Backup\HasStarted',
            [BackupEventSubscriber::class, 'handleBackupStarted']
        );

        $events->listen(
            'Fusion\Events\Backups\Backup\HasFinished',
            [BackupEventSubscriber::class, 'handleBackupFinished']
        );

        $events->listen(
            'Fusion\Events\Backups\Backup\WasUpdated',
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

        // --

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
