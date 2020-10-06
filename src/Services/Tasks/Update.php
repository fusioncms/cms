<?php

namespace Fusion\Services\Tasks;

use Fusion\Facades\Version;

class Update extends Task
{
    /**
     * Schedule Task.
     *
     * @return void
     */
    protected function handle()
    {
        $this->schedule
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
