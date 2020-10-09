<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Backup;
use Illuminate\Support\Facades\Storage;

class BackupController extends Controller
{
    public function index(Backup $backup)
    {
        $this->authorize('backups.download');

        if (!$backup->exists()) {
            abort('404', 'File does not exist.');
        }

        return Storage::disk($backup->disk)
            ->response($backup->location);
    }
}
