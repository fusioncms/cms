<?php

namespace Fusion\Services;

use Illuminate\Support\Str;
use Composer\Autoload\ClassLoader;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;

class Addon extends Collection
{
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
}