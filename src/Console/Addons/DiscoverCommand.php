<?php

namespace Fusion\Console\Addons;

use Fusion\Facades\Addon;
use Illuminate\Support\Str;
use Fusion\Services\Manifest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

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
        dump('addon:discover');

        Addon::discover();

        $count = Addon::count();
        $term  = ($count == 1) ? 'addon' : 'addons';

        $this->info("Discovered {$count} {$term}!");
    }
}