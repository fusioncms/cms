<?php

namespace Fusion\Providers;

use Fusion\Facades\Version;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;
use Illuminate\Console\Scheduling\Schedule;

class ScheduleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap tasks.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    public function boot(Schedule $schedule)
    {
        // $this->bootAutoUpdates($schedule);
    }

    /**
     * Auto-Update Task
     * 
     * Command:  `fusion:update`
     * Schedule: Daily
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    private function bootAutoUpdates(Schedule $schedule)
    {
        $schedule
            ->command('fusion:update')
            ->daily()
            ->timezone(setting('system.time_zone'))
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function() {
                return Version::isAutoUpdateEnabled() &&
                       Version::hasUpdate();
            })
            ->onFailure(function() {
                Log::error(
                    sprintf('Failed to update FusionCMS to version: %s', Version::latest())
                );
            });
    }
}
