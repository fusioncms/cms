<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Blueprint;
use Fusion\Models\Taxonomy;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class TaxonomyTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->taxonomy = Taxonomy::factory()->create();
    }

    /** @test */
    public function a_taxonomy_should_have_a_blueprint()
    {
        $this->assertInstanceOf(Blueprint::class, $this->taxonomy->blueprint);
    }

    /** @test */
    public function a_database_table_is_created_with_a_taxonomy()
    {
        $this->assertDatabaseHasTable("taxonomy_{$this->taxonomy->handle}");
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_taxonomy()
    {
        $oldHandle = $this->taxonomy->handle;
        $newHandle = 'tags';

        $this->taxonomy->handle = $newHandle;
        $this->taxonomy->save();

        $this->assertDatabaseDoesNotHaveTable("taxonomy_{$oldHandle}");
        $this->assertDatabaseHasTable("taxonomy_{$newHandle}");
    }

    /** @test */
    public function each_taxonomy_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: taxonomies.handle');

        $taxonomy         = $this->taxonomy->toArray();
        $taxonomy['id']   = null;
        $taxonomy['slug'] = 'new-slug';

        DB::table('taxonomies')->insert($taxonomy);
    }

    /** @test */
    public function each_taxonomy_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: taxonomies.slug');

        $taxonomy           = $this->taxonomy->toArray();
        $taxonomy['id']     = null;
        $taxonomy['handle'] = 'new-handle';

        DB::table('taxonomies')->insert($taxonomy);
    }
}
