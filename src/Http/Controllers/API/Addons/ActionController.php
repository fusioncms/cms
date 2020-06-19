<?php

namespace Fusion\Http\Controllers\API\Addons;

use Fusion\Facades\Addon;
use Fusion\Models\Extension;
use Illuminate\Http\Request;
use Fusion\Concerns\HasExtension;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\AddonResource;

class ActionController extends Controller
{
    /**
     * Install addon.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $addon
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function install(Request $request, $addon)
    {
        $this->authorize('addons.create');

        $addon = Addon::install($addon->namespace);

        return new AddonResource($addon);
    }

    /**
     * Update module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function update(Request $request, Collection $module)
    {
        $this->authorize('modules.update');

        // --
        // Run migrations..
        Artisan::call('module:migrate', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        // --
        // Sync module (e.g. assets, settings, extensions)
        Artisan::call('fusion:sync');

        return new ModuleResource($module);
    }

    /**
     * Seed module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function seed(Request $request, Collection $module)
    {
        $this->authorize('modules.update');

        Artisan::call('module:seed', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        return new ModuleResource($module);
    }

    /**
     * Uninstall process.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return void
     */
    public function uninstall(Request $request, $addon)
    {
        $this->authorize('addons.delete');

        $addon = Addon::uninstall($addon->namespace);

        return new AddonResource($addon);
    }
}
