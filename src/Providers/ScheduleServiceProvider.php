<?php

namespace Fusion\Providers;

use Fusion\Services\Tasks\Update;
use Fusion\Services\Tasks\Backup;
use Illuminate\Support\ServiceProvider;

class ScheduleServiceProvider extends ServiceProvider
{
    protected $tasks = [
        // Update::class,
        // Backup::class
    ];

    /**
     * Boot tasks.
     * 
     * @return void
     */
    public function boot()
    {
        collect($this->tasks)
            ->each(fn($task) => resolve($task));
    }
}
