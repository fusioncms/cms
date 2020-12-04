<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Blueprint;
use Fusion\Models\Matrix;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class MatrixTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_matrix_should_have_a_blueprint()
    {
        $matrix = Matrix::factory()->create();

        $this->assertInstanceOf(Blueprint::class, $matrix->blueprint);
    }

    /** @test */
    public function a_matrix_can_have_a_parent()
    {
        $parent = Matrix::factory()->create();
        $matrix = Matrix::factory()->create();

        $matrix->parent_id = $parent->id;
        $matrix->save();

        $this->assertInstanceOf(Matrix::class, $matrix->parent);
    }

    /** @test */
    public function a_matrix_can_have_children()
    {
        $matrix = Matrix::factory()->create();
        $child  = Matrix::factory()->create();

        $child->parent_id = $matrix->id;
        $child->save();

        $this->assertInstanceOf(Matrix::class, $matrix->children->first());
    }

    /** @test */
    public function a_database_table_is_created_with_a_matrix()
    {
        $matrix = Matrix::factory()->create(['handle' => 'posts']);

        $this->assertDatabaseHasTable('mx_posts');
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_collection()
    {
        $matrix = Matrix::factory()->create(['handle' => 'blog']);

        $this->assertDatabaseHasTable('mx_blog');

        $matrix->handle = 'posts';
        $matrix->save();

        $this->assertDatabaseHasTable('mx_posts');
    }

    /** @test */
    public function each_matrix_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: matrices.handle');

        $matrix         = Matrix::factory()->create();
        $matrix         = $matrix->toArray();
        $matrix['id']   = null;
        $matrix['slug'] = 'new-slug';

        DB::table('matrices')->insert($matrix);
    }

    /** @test */
    public function each_matrix_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: matrices.slug');

        $matrix           = Matrix::factory()->create();
        $matrix           = $matrix->toArray();
        $matrix['id']     = null;
        $matrix['handle'] = 'new-handle';

        DB::table('matrices')->insert($matrix);
    }
}
