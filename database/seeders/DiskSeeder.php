<?php

namespace Fusion\Database\Seeders;

use Fusion\Models\Disk;
use Illuminate\Database\Seeder;

class DiskSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        $disk = Disk::create([
            'name'   => 'Public',
            'handle' => 'public',
            'driver' => 'local',
            'configurations' => [
                'root' => 'app/public',
            ]
        ]);
    }
}