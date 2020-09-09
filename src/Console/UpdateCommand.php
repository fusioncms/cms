<?php

namespace Fusion\Console;

use Fusion\Facades\Version;
use Illuminate\Console\Command;

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
        if (!Version::hasUpdate()) {
            $this->error('You are currently on the latest version of FusionCMS.');

            return;
        }

        Version::update();
    }
}
