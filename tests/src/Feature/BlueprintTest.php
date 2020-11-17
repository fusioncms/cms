<?php

namespace Fusion\Tests\Feature;

use Facades\MatrixFactory;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlueprintTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = MatrixFactory::withName('Posts')
        ->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    ['name' => 'Content', 'handle' => 'content', 'type' => 'input'],
                ],
            ],
        ])->create();
    }

    /** @test */
    public function when_created_all_fields_should_generate_database_columns()
    {
        $this->matrix->blueprint->fields->each(function ($field) {
            $this->assertDatabaseTableHasColumn(
                $this->matrix->builderName(),
                $field->handle
            );
        });
    }

    /** @test */
    public function when_a_field_is_added_a_database_column_should_be_generated()
    {
        $this->matrix->blueprint->sections->first()
             ->fields()
             ->create([
                 'name'   => 'Excerpt',
                 'handle' => 'excerpt',
                 'type'   => 'textarea',
             ]);

        $this->assertDatabaseTableHasColumn(
            $this->matrix->builderName(),
            'excerpt'
        );
    }

    /** @test */
    public function when_a_field_is_removed_the_associated_database_column_should_be_removed()
    {
        $this->matrix->blueprint->sections->first()
             ->fields()->where('name', 'Content')->first()
             ->delete();

        $this->assertDatabaseTableDoesNotHaveColumn(
            $this->matrix->builderName(),
            'content'
        );
    }

    /** @test */
    public function when_a_field_is_renamed_the_associated_database_column_should_also_be_renamed()
    {
        $this->matrix->blueprint->sections->first()
             ->fields()->where('name', 'Content')->first()
             ->update([
                 'name'   => 'Story',
                 'handle' => 'story',
             ]);

        $this->assertDatabaseTableHasColumn(
            $this->matrix->builderName(),
            'story'
        );

        $this->assertDatabaseTableDoesNotHaveColumn(
            $this->matrix->builderName(),
            'content'
        );
    }

    /** @test */
    public function when_a_fields_fieldtype_is_changed_the_associated_database_columns_type_should_also_change()
    {
        $this->assertDatabaseTableColumnHasType(
            $this->matrix->builderName(),
            'content',
            'string'
        );

        $this->matrix->blueprint->sections->first()
             ->fields()->where('name', 'Content')->first()
             ->update([
                 'name'   => 'Content',
                 'handle' => 'content',
                 'type'   => 'textarea',
             ]);

        $this->assertDatabaseTableColumnHasType(
            $this->matrix->builderName(),
            'content',
            'text'
        );
    }

    /** @test */
    public function when_field_is_replaced_with_same_name_field_the_database_column_should_update_accordingly()
    {
        $this->assertDatabaseTableColumnHasType(
            $this->matrix->builderName(),
            'content',
            'string'
        );

        // Remove old field..
        $this->matrix->blueprint->sections->first()
             ->fields()->where('name', 'Content')->first()
             ->delete();

        // Create new field in it's place..
        $this->matrix->blueprint->sections->first()
             ->fields()
             ->create([
                 'name'   => 'Content',
                 'handle' => 'content',
                 'type'   => 'textarea',
             ]);

        $this->assertDatabaseTableColumnHasType(
            $this->matrix->builderName(),
            'content',
            'text'
        );
    }

    /** @test */
    public function when_a_field_is_renamed_and_new_field_created_in_its_name_database_should_have_both_columns()
    {
        $table     = $this->matrix->builderName();
        $blueprint = $this->matrix->blueprint;
        $section   = $blueprint->sections->first();
        $fieldA    = $section->fields->first();

        // old field - updated
        $fieldA->name   = 'Bar';
        $fieldA->handle = 'bar';
        $fieldA->type   = ['handle' => 'textarea'];

        // new field - w/ previous name
        $fieldB = factory(\Fusion\Models\Field::class)
            ->make(['name' => 'Content', 'handle' => 'content', 'type' => ['handle' => 'input']]);

        $section         = $section->fresh();
        $section->fields = [$fieldA, $fieldB];

        // Save blueprit through API..
        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/blueprints/{$blueprint->id}/sections", [
                'sections' => [$section],
            ]);

        // original field - updated
        $this->assertDatabaseTableHasColumn($table, 'bar');
        $this->assertDatabaseTableColumnHasType($table, 'bar', 'text');
        $this->assertDatabaseTableHasColumn($table, 'Content');
        $this->assertDatabaseTableColumnHasType($table, 'content', 'string');
    }
}
