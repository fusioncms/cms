<?php

namespace Fusion\Models;

use Carbon\Carbon;
use Fusion\Concerns\HasLocalEloquentData;
use Fusion\Database\Eloquent\Model;
use Spatie\Backup\Tasks\Monitor\BackupDestinationStatus;
use Spatie\Backup\Tasks\Monitor\BackupDestinationStatusFactory as Factory;

class Backup extends Model
{
    use HasLocalEloquentData;

    protected $schema = [
        'name'        => 'string',
        'disk'        => 'string',
        'size'        => 'string',
        'isReachable' => 'boolean',
        'isHealthy'   => 'boolean',
        'isLatest'    => 'boolean',
        'created_at'  => 'string',
    ];

    protected $casts = [
        'isReachable' => 'boolean',
        'isHealthy'   => 'boolean',
        'isLatest'    => 'boolean',
    ];

    /**
     * Get records.
     * 
     * @return array
     */
    public function getRows()
    {
        return Factory::createForMonitorConfig(config('backup.monitor_backups'))
            ->flatMap(function (BackupDestinationStatus $status) {
                $i = 0;

                return $status->backupDestination()->fresh()->backups()
                    ->map(function($backup) use ($status, &$i) {
                        $backup = [
                            'name'        => basename($backup->path(), '.zip'),
                            'disk'        => $status->backupDestination()->diskName(),
                            'size'        => human_filesize($backup->size()),
                            'isReachable' => $status->backupDestination()->isReachable(),
                            'isHealthy'   => $status->isHealthy(),
                            'isLatest'    => ($i++ == 0),
                            'created_at'  => $backup->date()->diffForHumans(),
                        ];

                        return $backup;
                    });
            })->toArray();
    }
}
