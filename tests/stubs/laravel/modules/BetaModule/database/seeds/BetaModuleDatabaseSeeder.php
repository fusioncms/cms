<?php

namespace Modules\BetaModule\Database\Seeds;

use Illuminate\Database\Seeder;
use Modules\BetaModule\Models\Beta;

class BetaModuleDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	factory(Beta::class, 10)->create();
    }
}