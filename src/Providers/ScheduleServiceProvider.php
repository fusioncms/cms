<?php

namespace Fusion\Providers;

use Fusion\Services\Tasks\Backups;
use Fusion\Services\Tasks\Update;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;

class ScheduleServiceProvider extends ServiceProvider
{
    protected $tasks = [
        // Update::class,
        Backups\Clean::class,
        Backups\Run::class,
    ];

    /**
     * Schedule tasks.
     *
     * @return void
     */
    public function boot()
    {
        $this->callAfterResolving(Schedule::class, function (Schedule $schedule) {
            collect($this->tasks)->each(function ($task) use ($schedule) {
                resolve($task)->handle($schedule);
            });
        });
    }
}
