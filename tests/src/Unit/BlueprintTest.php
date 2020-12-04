<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
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
                $section = Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create();

                // create field w/ column..
                $section->fields()->create(
                    Field::factory()->make()->toArray()
                );

                // create field w/o column..
                $section->fields()->create(
                    Field::factory()->withType('divider')->make()->toArray()
                );

                // create field w/ relationship..
                $section->fields()->create(
                    Field::factory()->withType('asset')->make()->toArray()
                );
            })
            ->create();
    }

    /** @test */
    public function a_blueprint_has_sections()
    {
        $this->assertTrue($this->matrix->blueprint->hasSections());
        $this->assertInstanceOf(HasMany::class, $this->matrix->blueprint->sections());
        $this->assertCount(1, $this->matrix->blueprint->sections);
    }

    /** @test */
    public function a_blueprint_can_have_many_fields_through_a_section()
    {
        $this->assertTrue($this->matrix->blueprint->hasFields());
        $this->assertInstanceOf(HasManyThrough::class, $this->matrix->blueprint->fields());
        $this->assertCount(3, $this->matrix->blueprint->fields);
    }

    /** @test */
    public function a_blueprint_can_return_fields_that_generate_database_columns()
    {
        $this->assertInstanceOf(Field::class, $this->matrix->blueprint->database()->first());
        $this->assertCount(1, $this->matrix->blueprint->database());
    }

    /** @test */
    public function a_blueprint_can_return_fields_that_generate_relationships()
    {
        $this->assertInstanceOf(Field::class, $this->matrix->blueprint->relationships()->first());
        $this->assertCount(1, $this->matrix->blueprint->relationships());
    }
}
