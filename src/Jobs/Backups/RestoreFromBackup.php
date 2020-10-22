<?php

namespace Fusion\Jobs\Backups;

use Exception;
use Fusion\Events\Backups\Restore;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Throwable;

class RestoreFromBackup
{
    use Dispatchable;
    use Queueable;

    /**
     * @var \Fusion\Models\Backup
     */
    protected $backup;

    /**
     * Temp restore directory.
     * 
     * @var \Spatie\TemporaryDirectory\TemporaryDirectory
     */
    protected $restoreDirectory;

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
        $this->before();

        $jobs = [
            // new \Fusion\Console\Actions\EnterMaintenanceMode,
            new \Fusion\Jobs\Backups\UnzipBackup($this->restoreDirectory, $this->backup),
            new \Fusion\Jobs\Backups\RestoreDatabase($this->restoreDirectory),
            new \Fusion\Jobs\Backups\RestoreFiles($this->restoreDirectory),
            new \Fusion\Jobs\Backups\RestoreEnvVariables($this->restoreDirectory),
            // new \Fusion\Console\Actions\ExitMaintenanceMode,
        ];

        foreach ($jobs as $job) {
            try {
                dispatch($job);
            } catch(Throwable $exception) {
                $this->failure($exception);
                $this->after();
                return;
            };
        }

        $this->success();
        $this->after();
    }

    /**
     * Setup
     * [helper]
     * 
     * @return void
     */
    private function before()
    {
        event(new Restore\HasStarted($this->backup));

        $disk = Storage::disk($this->backup->disk);
        $path = $disk->path('app/restore-temp');

        $this->restoreDirectory = (new TemporaryDirectory($path))
                ->name('temp')
                ->force()
                ->create()
                ->empty();

        Artisan::call('down');
    }

    /**
     * Tear down
     * [helper]
     * 
     * @return void
     */
    private function after()
    {
        Artisan::call('up');

        $this->restoreDirectory->delete();
    }

    /**
     * Restoration failed.
     *
     * @param \Throwable $exception
     *
     * @return void
     */
    private function failure(Throwable $exception)
    {
        event(new Restore\HasFailed($this->backup, $exception));

        Log::error("There was an error trying to restore from a backup: {$exception->getMessage()}", (array) $exception->getTrace()[0]);
    }

    /**
     * Restoration successful.
     *
     * @return void
     */
    private function success()
    {
        event(new Restore\WasSuccessful($this->backup));
    }
}
