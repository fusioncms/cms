<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\BackupResource;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Models\Backup;
use Illuminate\Http\Request;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\BackupResource
     */
    public function index(Request $request)
    {
        $this->authorize('backups.viewAny');

        $backups = Backup::all();

        return BackupResource::collection($backups);
    }

    /**
     * Create new backup to be saved on disk.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        $this->authorize('backups.create');

        BackupRun::dispatch();
    }

    /**
     * Remove the specified backup from disk.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Backup    $backup
     *
     * @return void
     */
    public function destroy(Request $request, Backup $backup)
    {
        $this->authorize('backups.delete');

        $backup->delete();
    }
}
