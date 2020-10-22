<?php

namespace Fusion\Jobs\Backups;

use Fusion\Console\Actions;
use Fusion\Events\Backups\Restore;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
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
     * Temporary restore directory.
     *
     * @var \Spatie\TemporaryDirectory\TemporaryDirectory
     */
    protected $tempDirectory;

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
        $this->setup();
        // --

        $jobs = [
            new \Fusion\Jobs\Backups\UnzipBackup($this->backup, $this->tempDirectory),
            new \Fusion\Jobs\Backups\RestoreEnvVariables($this->backup, $this->tempDirectory),
            new \Fusion\Jobs\Backups\RestoreFiles($this->backup, $this->tempDirectory),
            new \Fusion\Jobs\Backups\RestoreDatabase($this->backup, $this->tempDirectory),
        ];

        foreach ($jobs as $job) {
            try {
                dispatch($job);
            } catch (Throwable $exception) {
                $this->hasFailed($exception);

                return;
            }
        }

        // --
        $this->wasSuccessful();
    }

    /**
     * Setup
     * [helper].
     *
     * @return void
     */
    private function setup()
    {
        event(new Restore\HasStarted($this->backup));

        $disk = Storage::disk($this->backup->disk);
        $path = $disk->path('app/restore-temp');

        $this->tempDirectory = (new TemporaryDirectory($path))
                ->name('temp')
                ->force()
                ->create()
                ->empty();

        Actions\EnterMaintenanceMode::dispatch();
    }

    /**
     * Tear down
     * [helper].
     *
     * @return void
     */
    private function teardown()
    {
        Actions\ExitMaintenanceMode::dispatch();

        $this->tempDirectory->delete();
    }

    /**
     * Handle failed case.
     *
     * @param \Throwable $exception
     *
     * @return void
     */
    private function hasFailed(Throwable $exception)
    {
        $this->teardown();

        event(new Restore\HasFailed($this->backup, $exception));

        Log::error("There was an error trying to restore from a backup: {$exception->getMessage()}", (array) $exception->getTrace()[0]);
    }

    /**
     * Handle successful case.
     *
     * @return void
     */
    private function wasSuccessful()
    {
        $this->teardown();

        event(new Restore\WasSuccessful($this->backup));
    }
}
