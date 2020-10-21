<?php

namespace Fusion\Http\Controllers\API\Backups;

use Fusion\Http\Controllers\Controller;
use Fusion\Jobs\Backups\BackupRun;
use Fusion\Jobs\Backups\RestoreFromBackup;
use Fusion\Models\Backup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Bus;

class BackupRestoreController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Backup    $backup
     *
     * @return void
     */
    public function index(Request $request, Backup $backup)
    {
        $this->authorize('backups.restore');

        if ($request->input('saveBackup')) {
            Bus::chain([
                new BackupRun,
                new RestoreFromBackup($backup)
            ])->onConnection('sync')->dispatch();
        } else {
            RestoreFromBackup::dispatchSync($backup);
        }
    }
}
