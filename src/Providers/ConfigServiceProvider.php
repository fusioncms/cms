<?php

namespace Fusion\Providers;

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
        $files = File::files(fusion_path('config'));

        foreach ($files as $file) {
            $path = $file->getPathname();
            $name = File::name($path);

            $this->mergeConfigFrom($path, $name);
        }
    }

    /**
     * Merge the given configuration with the existing configuration.
     * [override].
     *
     * @param string $path
     * @param string $key
     *
     * @return void
     */
    protected function mergeConfigFrom($path, $key)
    {
        $this->app['config']->set(
            $key,
            $this->mergeDeep(
                $this->app['config']->get($key, []),
                require $path
            )
        );
    }

    /**
     * Deeply merge two arrays.
     *
     * @param array $original
     * @param array $merging
     *
     * @return array
     */
    private function mergeDeep(array $original, array $merging)
    {
        $output = array_merge($original, $merging);

        foreach ($original as $key => $value) {
            if (is_numeric($key) or !isset($merging[$key])) {
                continue;
            }

            if (is_array($value) && is_array($merging[$key])) {
                $output[$key] = $this->mergeDeep($value, $merging[$key]);
                $output[$key] = array_unique($output[$key], SORT_REGULAR);
            }
        }

        return $output;
    }
}
