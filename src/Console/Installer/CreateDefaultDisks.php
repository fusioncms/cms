<?php

namespace Fusion\Console\Installer;

use Fusion\Models\Disk;

class CreateDefaultDisks
{
    /**
     * Default Disks.
     *
     * @var array
     */
    protected $disks = [
        [
            'name'           => 'Public',
            'handle'         => 'public',
            'driver'         => 'local',
            'order'       => 0.0,
            'configurations' => [
                'root' => 'app/public',
            ],
        ],
        [
            'name'           => 'Local',
            'handle'         => 'local',
            'driver'         => 'local',
            'order'       => 1.0,
            'configurations' => [
                'root' => 'app',
            ],
        ],
    ];

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        activity()->withoutLogs(function () {
            foreach ($this->disks as $disk) {
                Disk::create($disk);
            }
        });
    }
}
