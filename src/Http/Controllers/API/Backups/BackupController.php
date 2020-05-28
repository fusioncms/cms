<?php

namespace Fusion\Http\Controllers\API\Backups;

use Storage;
use Illuminate\Http\Request;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\BackupResource;
use Spatie\Backup\BackupDestination\Backup;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  Request $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $this->authorize('backups.viewAny');

        return new BackupResource([]);
    }

    /**
     * Create new backup to be saved on disk.
     *
     * @param  Request $request
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
     * @param  Request $request
     * @return void
     */
    public function destroy(Backup $backup)
    {
        $this->authorize('backups.delete');

        $backup->delete();
    }
}
