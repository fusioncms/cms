<?php

namespace Fusion\Console;

use Fusion\Services\Addon;
use Fusion\Services\Manifest;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class AddonsDiscoverCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addons:discover';

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
        $cache  = $this->getCache();
        $addons = $this->getAddons();

        // 1. Extract existing "enabled" values for each addon
        $addons->map(function($addon) use($cache) {
            $cached = $cache->get($addon['namespace']);

            if ($cached = $cache->get($addon['namespace'])) {
                $addon['enabled'] = $cached['enabled'];
            } else {
                $addon['enabled'] = false;
            }

            return $addon;
        });

        // 2. Create new cache manifest and store values
        File::put(storage_path('app/addons.json'), $addons->toJson(JSON_PRETTY_PRINT));

        $term = ($addons->count() == 1) ? 'addon' : 'addons';
        $this->info("Discovered {$addons->count()} {$term}!");
    }

    /**
     * Get the addon cache manifest.
     *
     * @return \Fusion\Services\Manifest
     */
    protected function getCache()
    {
        if (file_exists(storage_path('app/addons.json'))) {
            return new Manifest(storage_path('app/addons.json'));
        }

        return new Manifest();
    }

    /**
     * Get the available addons and their manifests.
     *
     * @return \Illuminate\Support\Collection
     */
    protected function getAddons()
    {
        $addons = collect();

        if (file_exists(addon_path()) and is_dir(addon_path())) {
            $directories = File::directories(addon_path());

            foreach ($directories as $directory) {
                $addon     = new Manifest($directory.'/addon.json');
                $namespace = $addon->get('namespace');

                $addons->put($namespace, collect($addon->all()));
            }
        }

        return $addons;
    }
}