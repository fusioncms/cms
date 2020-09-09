<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Navigation;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class NavigationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /**
     * @test
     * @group unit
     * @group navigation
     */
    public function each_navigation_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: navigation.handle');

        DB::table('navigation')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name, '_'),
        ]);

        DB::table('navigation')->insert([
            'name'   => $name,
            'handle' => Str::slug($name, '_'),
        ]);
    }
}
