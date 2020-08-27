<?php

namespace Fusion\Console;

use Illuminate\Console\Command;
use Fusion\Facades\Version;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Jobs\Composer\Update as ComposerUpdate;

class UpdateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update FusionCMS to the latest version';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (! Version::hasUpdate()) {
            $this->error('You are currently on the latest version of FusionCMS.');
            return;
        }

        $version = Version::latest();
        
        if (! $this->confirm("Are you sure you wish to update to version {$version}?")) { 
            $this->info('Update aborted.');
            return;
        }

        $this->comment('Backing up...');

        BackupRun::withChain([
            /**
             * Update `fusioncms/cms` package
             */
            ComposerUpdate::dispatchNow(["fusioncms/cms:{$version}"]),
            
            /**
             * Housekeeping
             */
            function() {
                Artisan::call('fusion:publish');
                Artisan::call('optimize:clear');
            }
        ])
        ->dispatch()
        ->allOnQueue('update');
    }
}
