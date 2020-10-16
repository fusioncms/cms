<?php

namespace Fusion\Console\Backups;

use Fusion\Jobs\Backups\BackupRun;
use Illuminate\Console\Command;

class BackupCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:backup {--filename=} {--only-to-disk=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run manual backup.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $filename = $this->option('filename');
        $disks    = $this->option('only-to-disk');

        BackupRun::dispatch($filename, $disks);
    }
}
