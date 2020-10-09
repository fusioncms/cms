<?php

namespace Fusion\Jobs\Backups;

use Carbon\Carbon;
use Exception;
use Fusion\Events\Backups\BackupStarted;
use Fusion\Events\Backups\BackupFinished;
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
    protected $filename;

    /**
     * Backup disk (optional).
     * 
     * @var string
     */
    protected $disks;

    /**
     * Constructor.
     *
     * @param string $filename
     * @param string $disk
     */
    public function __construct($filename = null, $disks = null)
    {
        $this->filename = Str::finish($filename ?? Carbon::now()->format(static::FILENAME_FORMAT), '.zip');
        $this->disks    = $disks;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        event(new BackupStarted($this->filename, $this->disks));

        // --

        Artisan::call('backup:run', [
            '--filename'       => $this->filename,
            '--only-to-disk'   => $this->disks,
            '--no-interaction' => true,
            '--quiet'          => true,
        ]);

        // --
        
        event(new BackupFinished($this->filename, $this->disks));
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
