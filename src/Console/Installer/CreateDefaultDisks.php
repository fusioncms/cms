<?php

namespace Fusion\Console\Installer;

use Fusion\Models\Disk;

class CreateDefaultDisks
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        activity()->withoutLogs(function () {
            Disk::create([
                'name'           => 'Public',
                'handle'         => 'public',
                'driver'         => 'local',
                'configurations' => [
                    'root' => 'app/public',
                ],
            ]);
        });
    }
}
