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
     * Backup command options.
     *
     * @var array
     */
    public $options;

    /**
     * Creates new instance.
     *
     * @param array $options
     */
    public function __construct(array $options = [])
    {
        $this->options = $options;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $name = Str::finish($this->options['name'] ?? Carbon::now()->format(Backup::FILENAME_FORMAT), '.zip');
        $disk = $this->options['disk'] ?? null;

        event(new HasStarted(
            $name,
            $this->backupDestinationDisks($disk)
        ));
        // --

        Artisan::call('backup:run', [
            '--filename'              => $name,
            '--only-to-disk'          => $disk,
            '--disable-notifications' => $this->options['disable-notifications'] ?? false,
            '--no-interaction'        => true,
            '--quiet'                 => true,
        ]);

        // --
        event(new HasFinished(
            $name,
            $this->backupDestinationDisks($disk)
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
     * @param  string|null $disk
     * 
     * @return array
     */
    private function backupDestinationDisks($disk)
    {
        if (is_null($disk)) {
            return array_unique(
                config('backup.backup.destination.disks')
            );
        }

        return Arr::wrap($disk);
    }
}
