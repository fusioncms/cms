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
        Disk::create([
            'name'       => 'Public',
            'handle'     => 'public',
            'driver'     => 'local',
            'is_default' => true,
            'configurations' => [
                'root'       => storage_path('app/public'),
                'url'        => env('APP_URL').'/storage',
                'visibility' => 'public'
            ]
        ]);
    }
}