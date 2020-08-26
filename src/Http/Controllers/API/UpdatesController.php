<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Facades\Version;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\VersionResource;
use Illuminate\Http\Request;

class UpdatesController extends Controller
{
    /**
     * Show all "fusioncms/cms" changelog items.
     *
     * @param Request $request
     *
     * @return VersionResource
     */
    public function index(Request $request)
    {
        return VersionResource::collection(
            Version::paginate()
        );
    }

    /**
     * Update to version.
     *
     * @param Request $request
     * @param string  $version
     *
     * @return VersionResource
     */
    public function show(Request $request, $version)
    {
        return new VersionResource(
            Version::find($version)
        );
    }

    /**
     * Update to version.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        // TODO:
    }
}
