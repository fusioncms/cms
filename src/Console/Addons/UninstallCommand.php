<?php

namespace Fusion\Console\Addons;

use Illuminate\Console\Command;

class UninstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:uninstall';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clean up any uninstalled addons';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        app('addons.manifest')->storage(function($addon) {
            $addon->uninstall();
        });
    }
}