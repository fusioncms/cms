<?php

namespace Fusion\Http\Controllers\API\Addons;

use Fusion\Facades\Addon;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\AddonResource;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    /**
     * Install addon.
     *
     * @param \Illuminate\Http\Request       $request
     * @param \Illuminate\Support\Collection $addon
     *
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
     * @param \Illuminate\Http\Request       $request
     * @param \Illuminate\Support\Collection $module
     *
     * @return void
     */
    public function uninstall(Request $request, $addon)
    {
        $this->authorize('addons.delete');

        $addon = Addon::uninstall($addon['namespace']);

        return new AddonResource($addon);
    }
}
