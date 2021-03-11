<?php

namespace Fusion\Services\Addons;

use Illuminate\Foundation\PackageManifest;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

class Manifest extends PackageManifest
{
    /**
     * Build Addon manifest cache.
     * [override]
     * 
     * @return void
     */
    public function build()
    {
        if ($this->files->exists($path = $this->vendorPath.'/composer/installed.json')) {
            $installed = json_decode($this->files->get($path), true);
            $packages  = $installed['packages'] ?? $installed;
        }

        $formatted = collect($packages)
            ->filter(function ($package) {
                return Arr::has($package, 'extra.fusioncms');
            })
            ->mapWithKeys(function($package) {
                return $this->formatPackage($package);
            })
            ->filter()
            ->all();
            
        $this->write($formatted);
    }

    private function formatPackage($package)
    {
        $settings = Arr::get($package, 'extra.fusioncms');
        $name     = data_get($settings, 'name', $package['name']);

        return [strtolower($name) => [
            'name'        => $name,
            'description' => $package['description'] ?? null,
            'namespace'   => rtrim(key(data_get($package, 'autoload.psr-4', [])), '/'),
            'version'     => rtrim(data_get($package, 'version'), 'v'),
            'url'         => data_get($settings, 'url', $package['homepage'] ?? null),
            'license'     => $package['license'] ?? null,
            'provider'    => data_get($package, 'extra.laravel.providers.0'),
            'authors'     => $package['authors'] ?? [],
            'support'     => $package['support'] ?? [],
        ]];
    }

    /**
     * Returns collection of Addons objects.
     * 
     * @return \Illuminate\Support\Collection
     */
    public function getAddons()
    {
        return $this->addons()->transform(function($addon) {
            return new Addon($addon);
        });
    }

    /**
     * Returns Addons object by name.
     *
     * @param  string $name
     * 
     * @return \Illuminate\Support\Collection
     */
    public function getAddon($name)
    {
        if ($this->addons()->has($name)) {
            return new Addon($this->addons()->get($name));
        }
    }

    /**
     * Retrieve collection of registered Addons.
     * [Helper]
     * 
     * @return \Illuminate\Support\Collection
     */
    public function addons()
    {
        return collect($this->getManifest());
    }
}
