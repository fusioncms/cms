<?php

namespace Fusion\Listeners;

use Fusion\Concerns\HasCustomLogger;
use Fusion\Models\Backup;
use Illuminate\Support\Facades\Log;

class RestoreEventSubscriber
{
    use HasCustomLogger;

    /**
     * @param \Fusion\Events\Backups\Restore\HasStarted $event
     *
     * @return void
     */
    public function handleRestoreStarted($event)
    {
        $backup = $event->backup;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Restore has been requested.', []);
    }

    /**
     * @param \Fusion\Events\Backups\Restore\WasSuccessful $event
     *
     * @return void
     */
    public function handleRestoreSuccessful($event)
    {
        $backup = $event->backup;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Restore was successful.', []);
    }

    /**
     * @param \Fusion\Events\Backups\Restore\HasFailed $event
     *
     * @return void
     */
    public function handleRestoreFailed($event)
    {
        $backup    = $event->backup;
        $exception = $event->exception;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info("Restore has failed: {$exception->getMessage()}", (array) $exception->getTrace()[0]);
    }

    /**
     * @param \Fusion\Events\Backups\Restore\UnzipSuccesful $event
     *
     * @return void
     */
    public function handleUnzipSuccesful($event)
    {
        // $event->backup
    }

    /**
     * @param \Fusion\Events\Backups\Restore\UnzipFailed $event
     *
     * @return void
     */
    public function handleUnzipFailed($event)
    {
        // $event->backup
        // $event->exception
    }

    /**
     * @param \Fusion\Events\Backups\Restore\ManifestWasCreated $event
     *
     * @return void
     */
    public function handleManifestCreated($event)
    {
        $backup   = $event->backup;
        $manifest = $event->manifest;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Restore manifest created.', []);
    }

    /**
     * @param \Fusion\Events\Backups\Restore\FileSuccessful $event
     *
     * @return void
     */
    public function handleFileSuccessful($event)
    {
        $backup = $event->backup;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Filesystem successfully restored.', []);
    }
    
    /**
     * @param \Fusion\Events\Backups\Restore\FileFailed $event
     *
     * @return void
     */
    public function handleFileFailed($event)
    {
        $backup    = $event->backup;
        $exception = $event->exception;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Filesystem restore failed.', []);
    }

    /**
     * @param \Fusion\Events\Backups\Restore\DatabaseSuccessful $event
     *
     * @return void
     */
    public function handleDatabaseSuccessful($event)
    {
        $backup = $event->backup;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Database successfully restored.', []);
    }
    
    /**
     * @param \Fusion\Events\Backups\Restore\DatabaseFailed $event
     *
     * @return void
     */
    public function handleDatabaseFailed($event)
    {
        $backup    = $event->backup;
        $exception = $event->exception;

        $this
            ->logToFile($backup->log_path, $backup->disk)
            ->info('Database restore failed.', []);
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
            'Fusion\Events\Backups\Restore\HasStarted',
            [RestoreEventSubscriber::class, 'handleRestoreStarted']);

        $events->listen(
            'Fusion\Events\Backups\Restore\WasSuccessful',
            [RestoreEventSubscriber::class, 'handleRestoreSuccessful']);

        $events->listen(
            'Fusion\Events\Backups\Restore\HasFailed',
            [RestoreEventSubscriber::class, 'handleRestoreFailed']);

        $events->listen(
            'Fusion\Events\Backups\Restore\UnzipSuccesful',
            [RestoreEventSubscriber::class, 'handleUnzipSuccesful']);

        $events->listen(
            'Fusion\Events\Backups\Restore\UnzipFailed',
            [RestoreEventSubscriber::class, 'handleUnzipFailed']);

        $events->listen(
            'Fusion\Events\Backups\Restore\ManifestWasCreated',
            [RestoreEventSubscriber::class, 'handleManifestCreated']);

        $events->listen(
            'Fusion\Events\Backups\Restore\FileSuccessful',
            [RestoreEventSubscriber::class, 'handleFileSuccessful']);

        $events->listen(
            'Fusion\Events\Backups\Restore\FileFailed',
            [RestoreEventSubscriber::class, 'handleFileFailed']);

        $events->listen(
            'Fusion\Events\Backups\Restore\DatabaseSuccessful',
            [RestoreEventSubscriber::class, 'handleDatabaseSuccessful']);

        $events->listen(
            'Fusion\Events\Backups\Restore\DatabaseFailed',
            [RestoreEventSubscriber::class, 'handleDatabaseFailed']);
    }
}
