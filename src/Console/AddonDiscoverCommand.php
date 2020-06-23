<?php

namespace Fusion\Console;

use Fusion\Facades\Addon;
use Illuminate\Support\Str;
use Fusion\Services\Manifest;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class AddonDiscoverCommand extends Command
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
        $cache  = Addon::getCache();
        $addons = Addon::getAddons();

        // 1. Extract existing "enabled" values for each addon
        $addons->map(function($addon) use($cache) {
            $cached = $cache->get($addon['namespace']);

            $addon['slug']      = Str::slug($addon['name'], '-');
            $addon['handle']    = Str::slug($addon['name'], '_');
            $addon['enabled']   = $cached['enabled'] ?? false;
            $addon['installed'] = $cached['installed'] ?? false;

            return $addon;
        });

        // 2. Create new cache manifest and store values
        File::put(storage_path('app/addons.json'), $addons->toJson(JSON_PRETTY_PRINT));

        $term = ($addons->count() == 1) ? 'addon' : 'addons';
        $this->info("Discovered {$addons->count()} {$term}!");
    }
}