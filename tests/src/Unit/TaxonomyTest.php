<?php

namespace Fusion\Tests\Unit;

use Facades\TaxonomyFactory;
use Fusion\Models\Blueprint;
use Fusion\Models\Taxonomy;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class TaxonomyTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_taxonomy_should_have_a_blueprint()
    {
        $taxonomy = factory(Taxonomy::class)->create();

        $this->assertInstanceOf(Blueprint::class, $taxonomy->blueprint);
    }

    /** @test */
    public function a_database_table_is_created_with_a_taxonomy()
    {
        TaxonomyFactory::withName('Categories')
            ->create();

        $this->assertDatabaseHasTable('taxonomy_categories');
    }

    /** @test */
    public function the_database_table_is_renamed_when_renaming_a_taxonomy()
    {
        $taxonomy = TaxonomyFactory::withName('Categories')
            ->create();

        $this->assertDatabaseHasTable('taxonomy_categories');

        $taxonomy->name   = 'Tags';
        $taxonomy->handle = 'tags';
        $taxonomy->save();

        $this->assertDatabaseHasTable('taxonomy_tags');
    }

    /** @test */
    public function each_taxonomy_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: taxonomies.handle');

        $taxonomy         = factory(Taxonomy::class)->create();
        $taxonomy         = $taxonomy->toArray();
        $taxonomy['id']   = null;
        $taxonomy['slug'] = 'new-slug';

        DB::table('taxonomies')->insert($taxonomy);
    }

    /** @test */
    public function each_taxonomy_must_have_a_unique_slug()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: taxonomies.slug');

        $taxonomy           = factory(Taxonomy::class)->create();
        $taxonomy           = $taxonomy->toArray();
        $taxonomy['id']     = null;
        $taxonomy['handle'] = 'new-handle';

        DB::table('taxonomies')->insert($taxonomy);
    }
}
