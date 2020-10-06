<?php

namespace Fusion\Providers;

use Fusion\Services\Tasks\Update;
use Fusion\Services\Tasks\Backups;
use Illuminate\Support\ServiceProvider;

class ScheduleServiceProvider extends ServiceProvider
{
    protected $tasks = [
        // Update::class,
        // Backups\Clean::class,
        // Backups\Run::class
    ];

    /**
     * Boot tasks.
     * 
     * @return void
     */
    public function boot()
    {
        collect($this->tasks)->each(function($task) {
            resolve($task);
        });
    }
}
