<?php

namespace Fusion\Providers;

use Fusion\Services\Manifest;
use Fusion\Services\Theme;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

class ThemeServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('theme', function ($app) {
            $themes = [];
            $manifests = [];

            if (file_exists(theme_path()) and is_dir(theme_path())) {
                $themes = $this->app['files']->directories(theme_path());

                foreach ($themes as $theme) {
                    $manifest = new Manifest($theme.'/theme.json');
                    $namespace = $manifest->get('namespace');

                    $this->generateOptions($manifest);

                    $manifests[$namespace] = collect($manifest->all());
                }
            }

            return new Theme($manifests);
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['theme'];
    }

    /**
     * Generate the themes options file.
     *
     * @param \Fusion\Services\Manifest $manifest
     *
     * @return void
     */
    protected function generateOptions($manifest)
    {
        if (!File::exists(storage_path('app/themes'))) {
            File::makeDirectory(storage_path('app/themes'));
        }

        $optionsPath = storage_path('app/themes/'.$manifest->get('namespace').'.json');

        if (!File::exists($optionsPath)) {
            $defaults = $this->getDefaultOptions($manifest);

            File::put($optionsPath, json_encode($defaults, JSON_PRETTY_PRINT));
        }

        $optionsModified = File::lastModified($optionsPath);
        $manifestModified = File::lastModified($manifest->getPath());

        if ($manifestModified > $optionsModified) {
            $defaults = $this->getDefaultOptions($manifest);
            $options = collect(json_decode(File::get($optionsPath), true));

            $merged = $defaults->map(function ($items, $section) use ($options) {
                return $items->merge($options->get($section));
            });

            File::put($optionsPath, json_encode($merged, JSON_PRETTY_PRINT));
        }
    }

    /**
     * Get the default option values from the manifest file.
     *
     * @param \Fusion\Services\Manifest $manifest
     *
     * @return \Illuminate\Support\Collection
     */
    protected function getDefaultOptions($manifest)
    {
        return collect($manifest->get('options'))->mapWithKeys(function ($section, $handle) {
            $options = collect($section['fields'])->mapWithKeys(function ($option, $field) {
                return [$field => $option['default'] ?? null];
            });

            return [$handle => $options];
        });
    }
}
