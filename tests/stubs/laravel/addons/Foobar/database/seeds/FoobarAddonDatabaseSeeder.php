<?php

namespace Addons\Foobar\Database\Seeds;

use Addons\Foobar\Models\Beta;
use Illuminate\Database\Seeder;

class FoobarAddonDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	factory(Foobar::class, 10)->create();
    }
}