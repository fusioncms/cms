<?php

namespace Fusion\Console;

use Fusion\Facades\Addon;
use Illuminate\Console\Command;

class AddonDisableCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:disable {namespace}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Disable the specified addon';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $addon = Addon::where('namespace', $this->argument('namespace'))->first();

        if (! $addon) {
            $this->comment("The \"{$this->argument('namespace')}\" addon does not exist.");
            return;
        }

        Addon::disable($addon['namespace']);

        $this->info('Addon successfully disabled!');
    }
}