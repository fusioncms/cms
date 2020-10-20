<?php

namespace Fusion\Tests\Unit;

use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FormTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /** @test */
    public function each_form_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: forms.handle');

        DB::table('forms')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name, '_'),
            'slug'   => Str::slug($name),
        ]);

        DB::table('forms')->insert([
            'name'   => $name,
            'handle' => Str::slug($name, '_'),
            'slug'   => 'new-slug',
        ]);
    }

    /** @test */
    public function each_form_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: forms.slug');

        DB::table('forms')->insert([
            'name'   => ($name = $this->faker->word),
            'handle' => Str::slug($name, '_'),
            'slug'   => Str::slug($name),
        ]);

        DB::table('forms')->insert([
            'name'   => $name,
            'handle' => 'new-handle',
            'slug'   => Str::slug($name),
        ]);
    }
}
