<?php

namespace Fusion\Tests\Feature;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BlueprintTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->withName('Posts')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->hasFields(1)
                    ->create();
            })
            ->create();
    }

    /** @test */
    public function when_created_all_fields_should_generate_database_columns()
    {
        $this->matrix->blueprint->fields->each(function ($field) {
            $this->assertDatabaseTableHasColumn(
                $this->matrix->getBuilderTable(),
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
            $this->matrix->getBuilderTable(),
            'excerpt'
        );
    }

    /** @test */
    public function when_a_field_is_removed_the_associated_database_column_should_be_removed()
    {
        $table = $this->matrix->getBuilderTable();
        $field = $this->matrix->blueprint->fields->get(0);

        $field->delete();

        $this->assertDatabaseTableDoesNotHaveColumn($table, $field->handle);
    }

    /** @test */
    public function when_a_field_is_renamed_the_associated_database_column_should_also_be_renamed()
    {
        $table = $this->matrix->getBuilderTable();
        $field = $this->matrix->blueprint->fields->get(0);

        $oldHandle = $field->handle;
        $newHandle = 'story';

        $field->update(['handle' => $newHandle]);

        $this->assertDatabaseTableHasColumn($table, $newHandle);
        $this->assertDatabaseTableDoesNotHaveColumn($table, $oldHandle);
    }

    /** @test */
    public function when_a_fields_fieldtype_is_changed_the_associated_database_columns_type_should_also_change()
    {
        $table = $this->matrix->getBuilderTable();
        $field = $this->matrix->blueprint->fields->get(0);

        $this->assertDatabaseTableColumnHasType(
            $table,
            $field->handle,
            $field->type()->getColumn('type')
        );

        $field->update([
            'handle' => 'content',
            'type'   => 'textarea',
        ]);

        $this->assertDatabaseTableColumnHasType(
            $table,
            $field->handle,
            $field->type()->getColumn('type')
        );
    }

    /** @test */
    public function when_field_is_replaced_with_same_name_field_the_database_column_should_update_accordingly()
    {
        $table    = $this->matrix->getBuilderTable();
        $oldField = $this->matrix->blueprint->fields->get(0);

        // Remove old field..
        $oldField->delete();

        // Create new field in it's place..
        $newField = $this->matrix->blueprint->sections->first()
             ->fields()
             ->create([
                 'name'   => 'Content',
                 'handle' => 'content',
                 'type'   => 'textarea',
             ]);

        $this->assertDatabaseTableColumnHasType(
            $table,
            $newField->handle,
            $newField->type()->getColumn('type')
        );
    }

    /** @test */
    public function when_a_field_is_renamed_and_new_field_created_in_its_name_database_should_have_both_columns()
    {
        $table     = $this->matrix->getBuilderTable();
        $blueprint = $this->matrix->blueprint;
        $section   = $blueprint->sections->first();
        $fieldA    = $section->fields->first();

        // old field - updated
        $fieldA->name   = 'Bar';
        $fieldA->handle = 'bar';
        $fieldA->type   = ['handle' => 'textarea'];

        // new field - w/ previous name
        $fieldB = Field::factory()
            ->withName('Content')
            ->withType(['handle' => 'input'])
            ->make();

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
