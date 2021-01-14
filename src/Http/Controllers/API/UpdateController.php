<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Facades\Version;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\VersionResource;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Jobs\Updates\Finalize;
use Fusion\Jobs\Updates\Update;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    /**
     * Entries per page.
     * 
     * @var integer
     */
    protected $perPage = 5;

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
            Version::paginate($this->perPage = 5, $request->query('page'))
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
     * Create backup.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @throws \Throwable;
     *
     * @return void
     */
    public function backup(Request $request)
    {
        BackupRun::dispatchNow(['disable-notifications' => true]);

        return response()->json([], 200);
    }

    /**
     * Update composer dependencies.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @throws \Throwable;
     *
     * @return void
     */
    public function composer(Request $request)
    {
        Update::dispatch($request->input('version'));

        return response()->json([], 200);
    }

    /**
     * Finalize update.
     *
     * @param \Illuminate\Http\Request $request
     * 
     * @throws \Throwable;
     * 
     * @return void
     */
    public function finalize(Request $request)
    {
        Finalize::dispatch();

        return response()->json([], 200);
    }
}
