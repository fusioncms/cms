<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Taxonomy;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class TermTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $section      = \Facades\SectionFactory::times(1)->withoutFields()->create();
        $fieldExcerpt = \Facades\FieldFactory::withName('Excerpt')->withSection($section)->create();
        $fieldContent = \Facades\FieldFactory::withName('Content')->withType('textarea')->withSection($section)->create();
        $fieldset     = \Facades\FieldsetFactory::withName('General')->withSections(collect([$section]))->create();

        $this->taxonomy = \Facades\TaxonomyFactory::withName('Categories')->withFieldset($fieldset)->withStates(['terms'])->create();
    }

    /**
     * @test
     * @group unit
     * @group taxonomy
     * @group term
     */
    public function terms_have_a_relationship_with_a_taxonomy()
    {
        $term = $this->taxonomy->terms->first();

        $this->assertInstanceOf(Taxonomy::class, $term->taxonomy);
    }

    /**
     * @test
     * @group unit
     * @group taxonomy
     * @group term
     */
    public function the_database_table_is_renamed_when_renaming_a_taxonomy()
    {
        $this->taxonomy->name   = 'Tags';
        $this->taxonomy->handle = 'tags';
        $this->taxonomy->save();

        $term = $this->taxonomy->terms->first();

        $this->assertDatabaseHasTable($term->getTable());
    }

    /**
     * @test
     * @group unit
     * @group taxonomy
     * @group term
     */
    public function each_term_in_a_taxonomy_must_have_a_unique_slug()
    {
        $term = $this->taxonomy->terms->first();

        $this->expectException(QueryException::class);
        $this->expectExceptionMessage("UNIQUE constraint failed: {$term->getTable()}.slug");

        $data       = $term->toArray();
        $data['id'] = null;

        DB::table($term->getTable())->insert($data);
    }
}
