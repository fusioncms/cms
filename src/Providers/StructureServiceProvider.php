<?php

namespace Fusion\Providers;

use Illuminate\Support\ServiceProvider;

class StructureServiceProvider extends ServiceProvider
{
    /**
     * Boot the provided services.
     *
     * @return void
     */
    public function boot()
    {
        structures()->register(\Fusion\Structures\CollectionStructure::class);
        // structures()->register(\Fusion\Structures\SingleStructure::class);
        // structures()->register(\Fusion\Structures\FormStructure::class);
        
    }

    /**
     * Register the provided services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(\Fusion\Structures\Registry::class);
    }
}
