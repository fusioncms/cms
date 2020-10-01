<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Models\Form;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class HiddenFieldtypeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = \Facades\MatrixFactory::withName('HiddenFieldTest')
            ->asSingle()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'     => 'Hidden',
                            'handle'   => 'hidden',
                            'type'     => 'hidden',
                            'settings' => ['value' => 'hidden value']
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
                'url'  => 'fake-url'
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'url' => 'The URL format is invalid.'
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
                'url'   => $this->faker->url
            ])
            ->assertStatus(201);
    }
}
