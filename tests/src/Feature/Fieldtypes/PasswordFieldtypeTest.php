<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class PasswordFieldtypeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->asSingle()
            ->withName('Password Field')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->create()
                    ->fields()
                    ->create(
                        Field::factory()
                            ->withName('Password')
                            ->withType('password')
                            ->make()
                            ->toArray()
                    );
            })
            ->create();
    }

    /** @test */
    public function password_fieldtype_will_always_require_a_secure_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", [
                'name'     => 'Invalid Single',
                'slug'     => 'invalid-single',
                'password' => 'short',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'password' => 'The Password field must be at least 6 characters long.',
            ]);
    }

    /** @test */
    public function fieldtype_will_accept_a_secure_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/singles/{$this->matrix->id}", [
                'name'     => 'Invalid Single',
                'slug'     => 'invalid-single',
                'password' => $this->faker->password,
            ])
            ->assertStatus(201);
    }
}
