<?php

namespace Fusion\Tests\Feature\Fieldtypes;

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

        $this->matrix = \Facades\MatrixFactory::withName('UrlFieldTest')
            ->asSingle()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'   => 'URL',
                            'handle' => 'url',
                            'type'   => 'url',
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
    public function url_fieldtype_will_always_require_a_valid_url()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [
                'name' => 'Invalid Single',
                'slug' => 'invalid-single',
                'url'  => 'fake-url',
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'url' => 'The URL format is invalid.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function url_fieldtype_will_accept_a_valid_url()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [
                'name'  => 'Invalid Single',
                'slug'  => 'invalid-single',
                'url'   => $this->faker->url,
            ])
            ->assertStatus(201);
    }
}
