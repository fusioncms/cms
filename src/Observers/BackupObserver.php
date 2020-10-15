<?php

namespace Fusion\Observers;

use Fusion\Models\Backup;
use Illuminate\Support\Facades\Storage;

class BackupObserver
{
    /**
     * Handle the "deleted" event.
     *
     * @param \Fusion\Models\Backup $backup
     *
     * @return void
     */
    public function deleted(Backup $backup)
    {
        // remove backup
        $backup->backup()->delete();

        // remove log file
        Storage::disk($backup->disk)->delete($backup->log_path);
    }
}
