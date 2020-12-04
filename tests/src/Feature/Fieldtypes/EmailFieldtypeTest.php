<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class EmailFieldtypeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->asSingle()
            ->withName('Email Field')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create()
                    ->fields()
                    ->create(
                        Field::factory()
                            ->withName('Email')
                            ->withType('email')
                            ->make()
                            ->toArray()
                    );
            })
            ->create();
    }

    /** @test */
    public function email_fieldtype_will_always_require_a_valid_email()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", [
                'name'  => 'Invalid Single',
                'slug'  => 'invalid-single',
                'email' => 'fake-email',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'email' => 'The Email must be a valid email address.',
            ]);
    }

    /** @test */
    public function email_fieldtype_will_accept_a_valid_email()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", [
                'name'  => 'Invalid Single',
                'slug'  => 'invalid-single',
                'email' => $this->faker->unique()->safeEmail,
            ])
            ->assertStatus(201);
    }
}
