<?php

namespace Fusion\Services\Tasks\Backups;

use Fusion\Services\Tasks\Task;
use Fusion\Jobs\Backups\BackupRun;

class Run extends Task
{
    /**
     * Schedule Task.
     *
     * @return void
     */
    protected function handle()
    {
        $this->schedule
            ->job(new BackupRun())
            ->daily()
            ->timezone(setting('system.time_zone'))
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function () {
                return setting('backups.scheduled_backups', 'disabled') == 'enabled';
            });
    }
}
