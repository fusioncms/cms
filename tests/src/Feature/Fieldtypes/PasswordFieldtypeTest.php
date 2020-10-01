<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Form;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PasswordFieldtypeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = \Facades\MatrixFactory::withName('PasswordFieldTest')
            ->asSingle()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'   => 'Password',
                            'handle' => 'password',
                            'type'   => 'password',
                        ],
                    ],
                ],
            ])
            ->create();

        $this->field = $this->matrix->blueprint->sections->first()->fields()->first();
        $this->model = (new \Fusion\Services\Builders\Single($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function password_fieldtype_will_always_require_a_secure_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [
                'name'     => 'Invalid Single',
                'slug'     => 'invalid-single',
                'password' => 'short'
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'password' => 'The Password field must be at least 6 characters long.'
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function fieldtype_will_accept_a_secure_password()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [
                'name'     => 'Invalid Single',
                'slug'     => 'invalid-single',
                'password' => $this->faker->password
            ])
            ->assertStatus(201);
    }
}
