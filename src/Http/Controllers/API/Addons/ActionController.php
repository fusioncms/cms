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
     * @return \Fusion\Http\Resources\AddonResource
     */
    public function install(Request $request, $addon)
    {
        $this->authorize('addons.create');

        $addon = Addon::install($addon['namespace']);

        return new AddonResource($addon);
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

        $addon = Addon::uninstall($addon['namespace']);

        return new AddonResource($addon);
    }
}
