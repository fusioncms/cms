<?php

namespace Fusion\Jobs\Backups\Backup;

use Carbon\Carbon;
use Exception;
use Fusion\Events\Backups\Backup;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class BackupRun implements ShouldQueue
{
    use Dispatchable;
    use Queueable;

    public const FILENAME_FORMAT = 'Y-m-d-H-i-s';

    /**
     * Backup identifier.
     * 
     * @var string
     */
    public $filename;

    /**
     * Backup disks.
     * 
     * @var array
     */
    public $disks;

    /**
     * Constructor.
     *
     * @param string $filename
     * @param string $disk
     */
    public function __construct($filename = null)
    {
        $this->filename = Str::finish($filename ?? Carbon::now()->format(static::FILENAME_FORMAT), '.zip');
        $this->disks    = config('backup.backup.destination.disks');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        event(new Backup\Started(
            $this->filename, $this->disks));

        // --

        Artisan::call('backup:run', [
            '--filename'       => $this->filename,
            '--no-interaction' => true,
            '--quiet'          => true,
        ]);

        // --
        
        event(new Backup\Finished(
            $this->filename, $this->disks));
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
        Log::error('There was an error trying to backup FusionCMS: '.$exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
