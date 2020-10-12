<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Spatie\TemporaryDirectory\TemporaryDirectory;

class RestoreFromBackup
{
    use Dispatchable;
    use Queueable;

    /**
     * @var \Fusion\Models\Backup
     */
    protected $backup;

    /**
     * Constructor.
     *
     * @param \Fusion\Models\Backup $backup
     */
    public function __construct(Backup $backup)
    {
        $this->backup = $backup;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $extractionPath   = Storage::disk('public')->path('app/restore-temp');
        $restoreDirectory = (new TemporaryDirectory($extractionPath))
                ->name('temp')
                ->force()
                ->create()
                ->empty();

        $jobs = [
            'Enter maintenance mode...'       => new \Fusion\Console\Actions\EnterMaintenanceMode(),
            'Unzip backup for processing....' => new \Fusion\Jobs\Backups\UnzipBackup($restoreDirectory, $this->backup->fullPath),
            'Restore database from backup...' => new \Fusion\Jobs\Backups\RestoreDatabase($restoreDirectory),
            'Restore files from backup...'    => new \Fusion\Jobs\Backups\RestoreFiles($restoreDirectory),
            'Restore .env variables...'       => new \Fusion\Jobs\Backups\RestoreEnvVariables($restoreDirectory),
            'Exit maintenance mode...'        => new \Fusion\Console\Actions\ExitMaintenanceMode(),
        ];

        foreach ($jobs as $message => $instance) {
            try {
                dispatch($instance);
            } catch (Exception $exception) {
                $restoreDirectory->delete();

                throw new Exception('There was an error trying to restore from a backup: '.$exception->getMessage());
            }
        }

        $restoreDirectory->delete();
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
        Log::error('There was an error trying to restore from a backup: ', $exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
