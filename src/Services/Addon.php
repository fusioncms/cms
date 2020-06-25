<?php

namespace Fusion\Services;

use Illuminate\Support\Str;
use Fusion\Services\Manifest;
use Composer\Autoload\ClassLoader;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;

class Addon extends Collection
{

    public function discover()
    {
        $addons = $this->getAddons();

        // 1. Extract existing "enabled" values for each addon
        $addons->map(function($addon) {
            $cached = $this->get($addon['namespace']);

            $addon['slug']      = Str::slug($addon['name'], '-');
            $addon['handle']    = Str::slug($addon['name'], '_');
            $addon['enabled']   = $cached['enabled'] ?? ($addon['enabled'] ?? false);
            $addon['installed'] = $cached['installed'] ?? ($addon['installed'] ?? false);

            return $addon;
        });

        // 2. Create new cache manifest and store values
        File::put(storage_path('app/addons.json'), $addons->toJson(JSON_PRETTY_PRINT));
    }

    /**
     * Register the available addons.
     *
     * @return void
     */
    public function register()
    {
        $this->enabled()->each(function($addon) {
            $this->createSymlink($addon);
            $this->registerViewLocation($addon);
            $this->registerClassLoader($addon);
            $this->registerServiceProvider($addon);
        });
    }

    public function install($namespace)
    {
        $this->enable($namespace);
        $this->setProperty($namespace, 'installed', true);

        Artisan::call('addon:migrate', [
            'namespace' => $namespace,
        ]);

        Artisan::call('fusion:sync');

        return $this->get($namespace);
    }

        public function uninstall($namespace)
    {
        $this->disable($namespace);
        $this->setProperty($namespace, 'installed', false);

        // Remove extensions before rolling back..
        dispatch(new \Fusion\Console\Actions\SyncExtensions);

        Artisan::call('addon:rollback', [
            'namespace' => $namespace,
        ]);

        Artisan::call('fusion:sync');

        return $this->get($namespace);
    }

    /**
     * Enable the specified addon.
     *
     * @param  string  $namespace
     * @return void
     */
    public function enable($namespace)
    {
        $this->setProperty($namespace, 'enabled', true);

        return $this->get($namespace);
    }

    /**
     * Disable the specified addon.
     *
     * @param  string  $addon
     * @return void
     */
    public function disable($namespace)
    {
        $this->setProperty($namespace, 'enabled', false);

        return $this->get($namespace);
    }

    /**
     * Return a filtered collection of addons that
     * are enabled.
     *
     * @return \Illuminate\Support\Collection
     */
    public function enabled()
    {
        return $this->filter(function($addon) {
            return $addon['enabled'] == true;
        });
    }

    /**
     * Return a filtered collection of addons that
     * are disabled.
     *
     * @return \Illuminate\Support\Collection
     */
    public function disabled()
    {
        return $this->filter(function($addon) {
            return $addon['enabled'] == false;
        });
    }

    /**
     * Symlink the specified addon's public directory.
     *
     * @param  \Illuminate\Support\Collection  $addon
     * @return void
     */
    protected function createSymlink($addon)
    {
        $folder     = $addon['namespace'];
        $publicPath = public_path("addons/{$folder}");
        $addonPath  = addon_path("{$folder}/public");

        if (! File::exists(public_path("addons"))) {
            File::makeDirectory(public_path("addons"));
        }

        if (! File::exists($publicPath) and File::exists($addonPath)) {
            File::link(
                $addonPath,
                $publicPath
            );
        }
    }

    /**
     * Register the addon's view location with Laravel. Addon views
     * act as fallbacks if a theme view can't be found.
     *
     * @param  \Illuminate\Support\Collection  $addon
     * @return void
     */
    protected function registerViewLocation($addon)
    {
        $folder = $addon['namespace'];

        View::getFinder()->addLocation(addon_path("{$folder}/resources/views"));
    }

    /**
     * Register a new PSR-4 class loader with composer for
     * the specified addon.
     *
     * @param  \Illuminate\Support\Collection  $addon
     * @return void
     */
    protected function registerClassLoader($addon)
    {
        $namespace = $addon['namespace'];
        $loader    = new ClassLoader();

        $loader->addPsr4("Addons\\{$namespace}\\", addon_path("{$namespace}/src"));
        $loader->register();
    }

    /**
     * Register the addon's service provider with Laravel.
     *
     * @param  \Illuminate\Support\Collection  $addon
     * @return void
     */
    protected function registerServiceProvider($addon)
    {
        $provider = "Addons\\{$addon['namespace']}\\Providers\\AddonServiceProvider";

        if (class_exists($provider)) {
            App::register($provider);
        }
    }

    protected function setProperty($namespace, $key, $value)
    {
        $addon       = $this->get($namespace);
        $addon[$key] = $value;

        $this->put($namespace, $addon);

        File::put(storage_path('app/addons.json'), $this->toJson(JSON_PRETTY_PRINT));
    }

    /**
     * Get the addon cache manifest.
     *
     * @return \Fusion\Services\Manifest
     */
    public function getCache()
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
    public function getAddons()
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