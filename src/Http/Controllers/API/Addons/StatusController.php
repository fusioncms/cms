<?php

namespace Fusion\Http\Controllers\API\Addons;

use Fusion\Facades\Addon;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\AddonResource;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    /**
     * Enable module.
     *
     * @param \Illuminate\Http\Request       $request
     * @param \Illuminate\Support\Collection $addon
     *
     * @return Redirect|void
     */
    public function enable(Request $request, $addon)
    {
        $this->authorize('addons.update');

        $addon = Addon::enable($addon['namespace']);

        return new AddonResource($addon);
    }

    /**
     * Disable module.
     *
     * @param \Illuminate\Http\Request       $request
     * @param \Illuminate\Support\Collection $addon
     *
     * @return void
     */
    public function disable(Request $request, $addon)
    {
        $this->authorize('addons.update');

        $addon = Addon::disable($addon['namespace']);

        return new AddonResource($addon);
    }
}
