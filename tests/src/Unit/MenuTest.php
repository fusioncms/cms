<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Menu;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MenuTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /**
     * @test
     * @group unit
     * @group menu
     */
    public function each_menu_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: menus.handle');

        DB::table('menus')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name, '_'),
        ]);

        DB::table('menus')->insert([
            'name'   => $name,
            'handle' => Str::slug($name, '_'),
        ]);
    }
}
