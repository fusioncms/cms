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
     * Constructor.
     */
    public function __construct()
    {
        parent::__construct();

        $this->version = Version::latest();
    }

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

        /**
         * BEGIN
         */
        $this->comment('Backing up...');

        BackupRun::withChain([
            /**
             * Update `fusioncms/cms` package
             */
            ComposerUpdate::dispatchNow(["fusioncms/cms:{$this->version}"]),
            
            /**
             * Housekeeping
             */
            function() {
                Artisan::call('fusion:publish');
                Artisan::call('optimize:clear');
            }
        ])
        ->dispatch();
    }
}
