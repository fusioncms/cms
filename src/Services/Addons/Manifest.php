<?php

namespace Fusion\Services\Addons;

use Closure;
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

        return [$package['name'] => [
            'name'        => data_get($settings, 'name', $package['name']),
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
        if ($this->hasAddon($name)) {
            return new Addon($this->addons()->get($name));
        }
    }

    /**
     * Returns true if Addon is registered.
     * 
     * @param  string  $name
     * @return boolean
     */
    public function hasAddon($name)
    {
        return $this->addons()->has($name);
    }

    /**
     * Returns number of registered Addons.
     * 
     * @return integer
     */
    public function getAddonCount()
    {
        return $this->addons()->count();
    }

    /**
     * Returns resource links of registered Addons.
     * 
     * @return array
     */
    public function getResourceLinks()
    {
        return $this->getAddons()->mapWithKeys(function ($addon) {
            if (file_exists($addon->getPath('public'))) {
                return [ $addon->getPath('public') => public_path('vendor/'.$addon->getSlug()) ];
            }
        })->toArray();
    }

    /**
     * Sync publishables for all Addons.
     * 
     * @return void
     */
    public function sync()
    {
        $this->getAddons()->each(function($addon) {
            $addon->sync();
        });
    }

    /**
     * Publish vendor files for all Addons.
     * 
     * @return void
     */
    public function publish()
    {
        $this->getAddons()->each(function($addon) {
            $addon->publish();
        });
    }

    /**
     * Retrieve collection of registered Addons.
     * 
     * @return \Illuminate\Support\Collection
     */
    public function addons()
    {
        return collect($this->getManifest());
    }

    /**
     * Process addon storage.
     * 
     * @return void
     */
    public function storage(Closure $callback)
    {
        if (is_file($storage = app()->bootstrapPath('addon.php'))) {
            foreach($this->files->lines($storage) as $name) {
                if ($addon = $this->getAddon($name)) {
                    $callback($addon);
                }
            }

            @unlink($storage);            
        }
    }
}
