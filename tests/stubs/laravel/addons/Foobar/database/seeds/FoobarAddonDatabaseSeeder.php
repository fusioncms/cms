<?php

namespace Addons\Foobar\Database\Seeds;

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
