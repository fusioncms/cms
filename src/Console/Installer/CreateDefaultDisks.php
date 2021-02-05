<?php

namespace Fusion\Console\Installer;

use Fusion\Database\Seeders\DiskSeeder;
use Illuminate\Support\Facades\Artisan;

class CreateDefaultDisks
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('db:seed', [
        	'--class' => DiskSeeder::class
        ]);
    }
}
