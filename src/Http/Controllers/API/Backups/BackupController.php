<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\BackupResource;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Models\Backup as BackupModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\Backup\BackupDestination\Backup;

class BackupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $this->authorize('backups.viewAny');

        $backups = BackupModel::all();

        return BackupResource::collection($backups);
    }

    /**
     * Create new backup to be saved on disk.
     *
     * @param Request $request
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
     * @param Request $request
     * @param string  $disk
     * @param string  $name
     *
     * @return void
     */
    public function destroy(Request $request, $disk, $name)
    {
        $this->authorize('backups.delete');

        $disk   = Storage::disk($disk);
        $path   = preg_replace('/\s+/', '-', config('backup.backup.name'))."/{$name}.zip";
        $backup = new Backup($disk, $path);

        $backup->delete();
    }
}
