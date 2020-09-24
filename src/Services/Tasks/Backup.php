<?php

namespace Fusion\Services\Tasks;

use Fusion\Jobs\Backups\BackupRun;

class Backup extends Task
{
    /**
     * Schedule Task.
     * 
     * @return void
     */
	public function handle()
	{
		$this->schedule
            ->job(new BackupRun)
            ->daily()
            ->timezone(setting('system.time_zone'))
            ->withoutOverlapping()
            ->environments(['production'])
            ->when(function() {
                return setting('backups.scheduled_backups', 'disabled') == 'enabled';
            });
	}
}