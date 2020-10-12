<?php

namespace Fusion\Services\Tasks\Backups;

use Illuminate\Console\Scheduling\Schedule;

class Run
{
    /**
     * Schedule Task.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     *
     * @return void
     */
    public function handle(Schedule $schedule)
    {
        $schedule
            ->command('backup:run')
            ->dailyAt('1:00')
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function () {
                return setting('backups.scheduled_backups', 'disabled') == 'enabled';
            });
    }
}
