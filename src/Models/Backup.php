<?php

namespace Fusion\Models;

use Carbon\Carbon;
use Fusion\Concerns\HasLocalEloquentData;
use Illuminate\Database\Eloquent\Model;
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
                $destination = $status->backupDestination()->fresh();
                $i = 0;

                return $destination->backups()
                    ->map(function($backup) use ($status, $destination, &$i) {
                        $backup = [
                            'name'        => basename($backup->path(), '.zip'),
                            'disk'        => $destination->diskName(),
                            'size'        => human_filesize($backup->size()),
                            'isReachable' => $destination->isReachable(),
                            'isHealthy'   => $status->isHealthy(),
                            'isLatest'    => ($i++ == 0),
                            'created_at'  => $backup->date()->diffForHumans(),
                        ];

                        return $backup;
                    });
            })->toArray();
    }
}
