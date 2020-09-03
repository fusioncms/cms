<?php

namespace Fusion\Providers;

use Fusion\Facades\Version;
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
        // $this->bootAutoBackups($schedule);
        // $this->bootAutoUpdates($schedule);
    }

    /**
     * Auto-Update Task
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
            });
    }

    /**
     * Auto-Backup Task
     * 
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    private function bootAutoBackups(Schedule $schedule)
    {
        $schedule
            ->job(new \Fusion\Jobs\Backups\BackupRun)
            ->daily()
            ->timezone(setting('system.time_zone'))
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function() {
                return setting('backups.scheduled_backups', 'disabled') == 'enabled';
            });
    }
}
