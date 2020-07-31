<?php

namespace Fusion\Console\Addons;

use Fusion\Facades\Addon;
use Illuminate\Console\Command;
use Illuminate\Console\ConfirmableTrait;

class EnableCommand extends Command
{
    use ConfirmableTrait;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:enable {namespace}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enable the specified addon';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (!$this->confirmToProceed()) {
            return 1;
        }

        $addon = Addon::where('namespace', $this->argument('namespace'))->first();

        if (!$addon) {
            $this->comment("The \"{$this->argument('namespace')}\" addon does not exist.");

            return;
        }

        Addon::enable($addon['namespace']);

        $this->info('Addon successfully enabled!');
    }
}
