<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class UrlFieldtypeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->asSingle()
            ->withName('URL Field')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create()
                    ->fields()
                    ->create(
                        Field::factory()
                            ->withName('URL')
                            ->withType('url')
                            ->make()
                            ->toArray()
                );
            })
            ->create();
    }

    /** @test */
    public function url_fieldtype_will_always_require_a_valid_url()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", [
                'name' => 'Invalid Single',
                'slug' => 'invalid-single',
                'url'  => 'fake-url',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'url' => 'The URL format is invalid.',
            ]);
    }

    /** @test */
    public function url_fieldtype_will_accept_a_valid_url()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", [
                'name'  => 'Invalid Single',
                'slug'  => 'invalid-single',
                'url'   => $this->faker->url,
            ])
            ->assertStatus(201);
    }
}
