<?php

namespace Fusion\Services;

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
     * Activate the specified theme.
     *
     * @param string $theme
     *
     * @return void
     */
    public function activate($theme)
    {
        $this->setTheme($theme);

        if ($this->active()) {
            $this->createSymlink();
            $this->registerViewLocation();
            $this->registerClassLoader();
            $this->registerServiceProviders();
        }
    }

    /**
     * Deactivate the currently active theme.
     *
     * @return void
     */
    public function deactivate()
    {
        $this->setTheme(null);
        $this->removeSymlink();
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
     * @param string $theme
     *
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

    /**
     * Symlink the active theme's public directory.
     *
     * @return void
     */
    protected function createSymlink()
    {
        if (!File::exists(public_path('theme'))) {
            $folder = $this->active()->get('namespace');

            if (File::exists(theme_path("{$folder}/public"))) {
                // Delete existing symlink if present
                File::delete(public_path('theme'));

                // Create new theme symlink
                File::link(
                    theme_path("{$folder}/public"),
                    public_path('theme')
                );
            }
        }
    }

    /**
     * Symlink the active theme's public directory.
     *
     * @return void
     */
    protected function removeSymlink()
    {
        File::delete(public_path('theme'));
    }

    /**
     * Register the themes view location with Laravel. Theme views
     * take precedence over the application.
     *
     * @return void
     */
    protected function registerViewLocation()
    {
        $folder = $this->active()->get('namespace');

        View::getFinder()->prependLocation(theme_path("{$folder}/resources/views"));
    }

    /**
     * Register a new PSR-4 class loader with composer for
     * the currently active theme.
     *
     * @return void
     */
    protected function registerClassLoader()
    {
        $namespace = $this->active()->get('namespace');
        $loader    = new ClassLoader();

        $loader->addPsr4("Themes\\{$namespace}\\", theme_path("{$namespace}/src"));
        $loader->register();
    }

    /**
     * Register any specified service providers with Laravel
     * a specified by the active theme.
     *
     * @return void
     */
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
