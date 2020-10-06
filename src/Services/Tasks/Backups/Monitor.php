<?php

namespace Fusion\Services\Tasks\Backups;

use Fusion\Services\Tasks\Task;

class Monitor extends Task
{
    /**
     * Schedule Task.
     *
     * @return void
     */
    protected function handle()
    {
        $this->schedule
            ->command('backup:monitor')
            ->dailyAt();
            // ->daily()
            // ->timezone(setting('system.time_zone'))
            // ->withoutOverlapping()
            // ->environments(['production'])
            // ->when(function () {
            //     return setting('backups.scheduled_backups', 'disabled') == 'enabled';
            // });
    }
}
