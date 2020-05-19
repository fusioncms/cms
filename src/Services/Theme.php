<?php

namespace Fusion\Services;

use Illuminate\Support\Str;
use Composer\Autoload\ClassLoader;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;

class Theme extends Collection
{
    /**
     * @var string
     */
    protected $theme;

    /**
     * Activate the referenced theme.
     *
     * @param  string  $theme
     * @return void
     */
    public function activate($theme)
    {
        $this->setTheme($theme);
        $this->symlinkPublicDirectory();
        $this->registerViewLocation();
        $this->registerClassLoader();
        $this->registerServiceProviders();
    }

    /**
     * Deactivate the currently active theme.
     *
     * @return void
     */
    public function deactivate()
    {
        $this->setTheme(null);
    }

    /**
     * Return the currently active theme properties.
     *
     * @return \Illuminate\Support\Collection
     */
    public function active()
    {
        return $this->get($this->theme);
    }

    /**
     * Set the active theme property.
     *
     * @param  string  $theme
     * @return void
     */
    public function setTheme($theme)
    {
        $this->theme = $theme;
    }

    /**
     * Get the active theme property.
     *
     * @return string
     */
    public function getTheme()
    {
        return $this->theme;
    }

    protected function symlinkPublicDirectory()
    {
        if (! File::exists(public_path('theme'))) {
            $folder = $this->active()->get('namespace');

            File::link(
                theme_path("{$folder}/public"),
                public_path('theme')
            );
        }
    }

    /**
     * Register the themes view location with Laravel.
     *
     * @return void
     */
    protected function registerViewLocation()
    {
        $folder = $this->active()->get('namespace');

        View::getFinder()->prependLocation(theme_path("{$folder}/resources/views"));
    }

    protected function registerClassLoader()
    {
        $namespace = $this->active()->get('namespace');
        $loader    = new ClassLoader();

        $loader->addPsr4("Themes\\{$namespace}\\", theme_path("{$namespace}/src"));
        $loader->register();
    }

    protected function registerServiceProviders()
    {
        if ($this->active()->has('providers')) {
            $providers = $this->active()->get('providers');

            foreach ($providers as $provider) {
                App::register($provider);
            }
        }
    }
}