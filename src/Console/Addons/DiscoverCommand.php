<?php

namespace Fusion\Console\Addons;

use Illuminate\Console\Command;

class DiscoverCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:discover';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Discover and register all addons';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $manifest = $this->getLaravel()->make('addons.manifest');
        $manifest->build();

        $count = $manifest->getAddonCount();
        $term  = ($count == 1) ? 'addon' : 'addons';

        $this->info("Discovered {$count} {$term}!");
    }
}