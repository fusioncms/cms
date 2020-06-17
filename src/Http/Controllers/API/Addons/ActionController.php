<?php

namespace Fusion\Http\Controllers\API\Modules;

use Fusion\Models\Extension;
use Illuminate\Http\Request;
use Fusion\Concerns\HasExtension;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;
use Caffeinated\Modules\Facades\Module;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ModuleResource;

class ActionController extends Controller
{
    /**
     * Request for new module installation.
     *
     * @param  \Illuminate\Http\Request        $request
     * @param  \Illuminate\Support\Collection  $module
     * @return \Fusion\Http\Resources\ModuleResource
     */
    public function install(Request $request, Collection $module)
    {
        $this->authorize('modules.create');

        // --
        // Register module..
        Module::enable($module->get('slug'));
        Module::set($module->get('slug') . '::installed', true);
        Module::optimize();

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
    public function uninstall(Request $request, Collection $module)
    {
        $this->authorize('modules.delete');

        Module::disable($module->get('slug'));
        Module::set($module->get('slug') . '::installed', false);

        // --
        // Remove extensions before rolling back..
        dispatch(new \Fusion\Console\Actions\SyncExtensions);

        // --
        // Rollback migrations..
        Artisan::call('module:migrate:rollback', [
            'slug'    => $module->get('slug'),
            '--force' => true,
        ]);

        // --
        // File cleanup..
        File::deleteDirectory(base_path("modules/{$module->get('basename')}"));

        // --
        // Unregister module..
        Module::optimize();

        // --
        // Re-sync fusion..
        Artisan::call('fusion:sync');
    }
}
