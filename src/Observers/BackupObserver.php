<?php

namespace Fusion\Observers;

use Fusion\Models\Backup;

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
        $backup->backup()->delete();
    }
}
