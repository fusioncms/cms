<?php

namespace Fusion\Console;

use Illuminate\Console\Command;
use Fusion\Facades\Version;
use Fusion\Jobs\Composer\Update;
use Fusion\Jobs\Backups\BackupRun;

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
        $prevVersion = ltrim(Version::current(), 'v');
        $nextVersion = ltrim(Version::latest(), 'v');

        if (version_compare($prevVersion, $nextVersion, '>=')) {
            $this->error('You already have the latest and greatest!');
            return;
        }
        
        if ($this->confirm("Are you sure you wish to update to version {$nextVersion}?")) { 
            $this->info("Updating FusionCMS from {$prevVersion} to {$nextVersion}");
            $this->comment('Backing up...');

            BackupRun::withChain([
                Update::dispatchNow(["fusioncms/cms:{$nextVersion}"]),
                function() {
                    Artisan::call('fusion:publish');
                    Artisan::call('optimize:clear');
                }
            ])->dispatch();
        } else {
            $this->info('Update aborted.');
            return;
        }
    }
}
