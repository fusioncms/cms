<?php

namespace Fusion\Services\Tasks;

use Fusion\Facades\Version;
use Illuminate\Console\Scheduling\Schedule;

class Update
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
            ->command('fusion:update')
            ->daily()
            ->timezone(setting('system.time_zone'))
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function () {
                return Version::isAutoUpdateEnabled() &&
                       Version::hasUpdate();
            });
    }
}
