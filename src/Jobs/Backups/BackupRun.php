<?php

namespace Fusion\Jobs\Backups;

use Carbon\Carbon;
use Fusion\Events\Backups\Backup\HasFinished;
use Fusion\Events\Backups\Backup\HasStarted;
use Fusion\Models\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Throwable;

class BackupRun implements ShouldQueue
{
    use Dispatchable;
    use Queueable;

    /**
     * Backup identifier.
     *
     * @var string
     */
    public $name;

    /**
     * Backup command options.
     *
     * @var array
     */
    public $options;

    /**
     * Backup disks.
     *
     * @var array
     */
    public $disks;

    /**
     * Creates new instance.
     *
     * @param mixed  $name - backup identifier
     * @param string $disk - specific disk|all
     */
    public function __construct($name = null, $disk = null)
    {
        $this->name = Str::finish($name ?? Carbon::now()->format(Backup::FILENAME_FORMAT), '.zip');
        $this->disk = $disk;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        event(new HasStarted(
            $this->name,
            $this->backupDestinationDisks()
        ));
        // --

        Artisan::call('backup:run', [
            '--filename'       => $this->name,
            '--only-to-disk'   => $this->disk,
            '--no-interaction' => true,
            '--quiet'          => true,
        ]);

        // --
        event(new HasFinished(
            $this->name,
            $this->backupDestinationDisks()
        ));
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
        Log::error('There was an error trying to backup FusionCMS: '.$exception->getMessage(), (array) $exception->getTrace()[0]);
    }

    /**
     * Backup destination disks.
     *
     * @return array
     */
    private function backupDestinationDisks()
    {
        if (is_null($this->disk)) {
            return array_unique(
                config('backup.backup.destination.disks')
            );
        }

        return Arr::wrap($this->disk);
    }
}
