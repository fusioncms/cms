<?php

namespace Fusion\Tests\Unit;

use Facades\MatrixFactory;
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

        $matrix = MatrixFactory::withName('Posts')->withSections([
            [
                'name'   => 'General',
                'handle' => 'general',
                'fields' => [
                    [
                        'name'   => 'Foo',
                        'handle' => 'foo',
                        'type'   => 'asset',
                    ],
                    [
                        'name'   => 'Bar',
                        'handle' => 'bar',
                        'type'   => 'textarea',
                    ],
                    [
                        'name'   => 'Baz',
                        'handle' => 'baz',
                        'type'   => 'divider',
                    ],
                ],
            ],
        ])->create();

        $this->blueprint = $matrix->blueprint;

        $this->fieldFoo  = $this->blueprint->fields->where('name', 'Foo')->first();
        $this->fieldBar  = $this->blueprint->fields->where('name', 'Bar')->first();
        $this->fieldBaz  = $this->blueprint->fields->where('name', 'Baz')->first();
    }

    /** @test */
    public function a_blueprint_has_sections()
    {
        $this->assertTrue($this->blueprint->hasSections());
        $this->assertInstanceOf(HasMany::class, $this->blueprint->sections());
        $this->assertCount(1, $this->blueprint->sections);
    }

    /** @test */
    public function a_blueprint_can_have_many_fields_through_a_section()
    {
        $this->assertTrue($this->blueprint->hasFields());
        $this->assertInstanceOf(HasManyThrough::class, $this->blueprint->fields());
        $this->assertCount(3, $this->blueprint->fields);
    }

    /** @test */
    public function a_blueprint_can_return_fields_that_generate_database_columns()
    {
        $this->assertInstanceOf('Fusion\Models\Field', $this->blueprint->database()->first());
        $this->assertCount(1, $this->blueprint->database());
    }

    /** @test */
    public function a_blueprint_can_return_fields_that_generate_relationships()
    {
        $this->assertInstanceOf('Fusion\Models\Field', $this->blueprint->relationships()->first());
        $this->assertCount(1, $this->blueprint->relationships());
    }
}
