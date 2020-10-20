<?php

namespace Fusion\Tests\Feature\Fieldtypes;

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

        $this->matrix = \Facades\MatrixFactory::withName('EmailFieldTest')
            ->asSingle()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'   => 'Email',
                            'handle' => 'email',
                            'type'   => 'email',
                        ],
                    ],
                ],
            ])
            ->create();

        $this->field = $this->matrix->blueprint->sections->first()->fields()->first();
        $this->model = (new \Fusion\Services\Builders\Single($this->matrix->handle))->make();
    }

    /** @test */
    public function email_fieldtype_will_always_require_a_valid_email()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [
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
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [
                'name'  => 'Invalid Single',
                'slug'  => 'invalid-single',
                'email' => $this->faker->unique()->safeEmail,
            ])
            ->assertStatus(201);
    }
}
