<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Jobs\Backups\RestoreFromBackup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Spatie\Backup\BackupDestination\Backup;

class BackupRestoreController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     * @param string  $disk
     * @param string  $name
     *
     * @return void
     */
    public function index(Request $request, $disk, $name)
    {
        $this->authorize('backups.restore');

        if ($request->input('saveBackup')) {
            BackupRun::dispatch();
        }
        
        // restore
        $disk   = Storage::disk($disk);
        $path   = preg_replace('/\s+/', '-', config('backup.backup.name'))."/{$name}.zip";
        $backup = new Backup($disk, $path);

        RestoreFromBackup::dispatch($backup);
    }
}
