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
                'root'       => storage_path('app/public'),
                'url'        => env('APP_URL').'/storage',
                'visibility' => 'public'
            ]
        ]);

        $disk->forceFill(['is_default' => true])->save();
    }
}