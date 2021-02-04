<?php

namespace Fusion\Providers;

use Fusion\Models\Disk;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

class ConfigServiceProvider extends ServiceProvider
{
    /**
     * Register the provided services.
     * Merges in `fusioncms` overridding configs.
     *
     * @return void
     */
    public function register()
    {
        $this->registerMacro();
    }

    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        /**
         * FusionCMS will now merge it's own
         * configurations on top of Laravel's.
         */
        $this->mergeFusionCMSConfigurations();
        $this->mergeFileSystemConfigurations();
    }

    /**
     * Add `mergeDeep` macro to Arr Facade.
     *
     * @var array
     */
    protected function registerMacro()
    {
        Arr::macro('mergeDeep', function (array $arr1, array $arr2) {
            $output = array_merge($arr1, $arr2);

            foreach ($arr1 as $key => $value) {
                if (is_numeric($key) or !isset($arr2[$key])) {
                    continue;
                }

                if (is_array($value) && is_array($arr2[$key])) {
                    $output[$key] = Arr::mergeDeep($value, $arr2[$key]);
                    $output[$key] = array_unique($output[$key], SORT_REGULAR);
                }
            }

            return $output;
        });
    }

    /**
     * Merge in FusionCMS config file configurations.
     *
     * @return void
     */
    protected function mergeFusionCMSConfigurations()
    {
        $files = File::files(fusion_path('config'));

        foreach ($files as $file) {
            $path = $file->getPathname();
            $name = File::name($path);

            $this->app['config']->set(
                $name,
                Arr::mergeDeep(
                    $this->app['config']->get($name, []),
                    require $path
                )
            );
        }
    }

    /**
     * Merge in FileSystem Disks configurations.
     * 
     * @return void
     */
    protected function mergeFileSystemConfigurations()
    {
        // Set default disk..
        if ($default = Disk::default()->first()) {
            $this->app['config']->set('filesystems.default', $default->handle);
        }

        // Merge in disks..
        $this->app['config']->set('filesystems.disks', 
            array_merge(
                $this->app['config']->get('filesystems.disks', []),
                $this->getFusionDisks()
            )
        );

        // dd($this->app['config']->get('filesystems.default'));
    }

    /**
     * Returns FileSystem Disks from storage.
     * [Helper]
     * 
     * @return array
     */
    private function getFusionDisks()
    {
        return Disk::all()->mapWithKeys(function($disk) {
            $configurations = $disk->configurations;
            $configurations->put('driver', $disk->driver);
            
            return [ $disk->handle => $configurations->toArray() ];
        })->toArray();
    }
}
