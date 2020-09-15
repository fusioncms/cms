<?php

namespace Fusion\Tests\Feature;

use Facades\FieldFactory;
use Facades\MatrixFactory;
use Fusion\Models\Blueprint;
use Fusion\Services\Builders\Single;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlueprintTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_created_all_fields_should_generate_database_columns()
    {
        $matrix   = MatrixFactory::create();
        $table    = $matrix->getBuilder()->getTable();

        $matrix->blueprint->fields->each(function ($field) use ($table) {
            $this->assertDatabaseTableHasColumn($table, $field->handle);
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_a_field_is_added_a_database_column_should_be_generated()
    {
        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Excerpt',
                        'handle' => 'excerpt',
                        'type'   => 'input',
                    ],
                ],
            ],
        ])->create();

        $table   = $matrix->getBuilder()->getTable();
        $section = $matrix->blueprint->sections()->first();

        $section->fields()->create([
            'name'   => 'Content',
            'handle' => 'content',
            'type'   => 'input',
        ]);

        $this->assertDatabaseTableHasColumn($table, 'content');
    }

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_a_field_is_removed_the_associated_database_column_should_be_removed()
    {
        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Excerpt',
                        'handle' => 'excerpt',
                        'type'   => 'input',
                    ],
                    [
                        'name'   => 'Content',
                        'handle' => 'content',
                        'type'   => 'input',
                    ],
                ],
            ],
        ])->create();

        $table   = $matrix->getBuilder()->getTable();
        $section = $matrix->blueprint->sections->first();

        $section->fields()->where('name', 'Content')->first()->delete();

        $this->assertDatabaseTableDoesNotHaveColumn($table, 'content');
    }

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_a_field_is_renamed_the_associated_database_column_should_also_be_renamed()
    {
        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Excerpt',
                        'handle' => 'excerpt',
                        'type'   => 'input',
                    ],
                    [
                        'name'   => 'Content',
                        'handle' => 'content',
                        'type'   => 'input',
                    ],
                ],
            ],
        ])->create();

        $table   = $matrix->getBuilder()->getTable();
        $section = $matrix->blueprint->sections->first();

        $section->fields()->where('name', 'Content')->first()->update([
            'name'   => 'Story',
            'handle' => 'story',
        ]);

        $this->assertDatabaseTableHasColumn($table, 'story');
    }

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_a_fields_fieldtype_is_changed_the_associated_database_columns_type_should_also_change()
    {
        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Excerpt',
                        'handle' => 'excerpt',
                        'type'   => 'input',
                    ],
                    [
                        'name'   => 'Content',
                        'handle' => 'content',
                        'type'   => 'input',
                    ],
                ],
            ],
        ])->create();

        $table   = $matrix->getBuilder()->getTable();
        $section = $matrix->blueprint->sections->first();

        $this->assertDatabaseTableColumnHasType($table, 'content', 'string');

        $section->fields()->where('name', 'Content')->first()->update([
            'name'   => 'Content',
            'handle' => 'content',
            'type'   => 'textarea',
        ]);

        $this->assertDatabaseTableColumnHasType($table, 'content', 'text');
    }

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_a_field_is_retyped_the_associated_database_column_should_also_be_retyped()
    {
        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Foobar',
                        'handle' => 'foobar',
                        'type'   => 'input',
                    ],
                ],
            ],
        ])->create();

        $table   = $matrix->getBuilder()->getTable();
        $section = $matrix->blueprint->sections->first();
        $field   = $section->fields->first();

        // Assert column & type are correct..
        $this->assertDatabaseTableColumnHasType(
            $table,
            $field->handle,
            $field->type()->cast
        );

        // Remove old field..
        $field->delete();

        // Create new field in it's place..
        $field = $section->fields()->create([
            'name'   => 'Foobar',
            'handle' => 'foobar',
            'type'   => 'number',
        ]);

        // Assert column & type are correct..
        $this->assertDatabaseTableColumnHasType(
            $table,
            $field->handle,
            $field->type()->cast
        );
    }

    /**
     * @test
     * @group fusioncms
     * @group blueprint
     */
    public function when_a_field_is_renamed_and_new_field_created_in_its_name_database_should_have_both_columns()
    {
        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Foo',
                        'handle' => 'foo',
                        'type'   => 'input',
                    ],
                ],
            ],
        ])->create();

        $table     = $matrix->getBuilder()->getTable();
        $blueprint = $matrix->blueprint;
        $section   = $blueprint->sections->first();
        $fieldA    = $section->fields->first();

        // old field - updated
        $fieldA->name   = 'Bar';
        $fieldA->handle = 'bar';
        $fieldA->type   = ['handle' => 'textarea'];

        // new field - w/ previous name
        $fieldB = factory(\Fusion\Models\Field::class)->make(['name' => 'Foo', 'handle' => 'foo']);

        $section         = $section->fresh();
        $section->fields = [$fieldA, $fieldB];

        // Save blueprit through API..
        $this
            ->be($this->owner, 'api')
            ->json(
                'POST',
                '/api/blueprints/'.$blueprint->id.'/sections',
                ['sections' => [$section]]
            );

        // original field - updated
        $this->assertDatabaseTableHasColumn($table, 'bar');
        $this->assertDatabaseTableColumnHasType($table, 'bar', 'text');
        $this->assertDatabaseTableHasColumn($table, 'foo');
        $this->assertDatabaseTableColumnHasType($table, 'foo', 'string');
    }
}
