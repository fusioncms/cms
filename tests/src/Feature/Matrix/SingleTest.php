<?php

namespace Fusion\Tests\Feature\Matrix;

use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = \Facades\MatrixFactory::withName('Single')
            ->asSingle()
            ->withSections([
                [
                    'name'   => 'General',
                    'handle' => 'general',
                    'fields' => [
                        [
                            'name'   => 'Excerpt',
                            'handle' => 'excerpt',
                            'type'   => 'input',
                        ],
                        [
                            'name'   => 'Content',
                            'handle' => 'content',
                            'type'   => 'textarea',
                        ],
                    ],
                ],
            ])
            ->withRoute('{slug}')
            ->withTemplate('index')
            ->create();

        $this->fieldExcerpt = $this->matrix->blueprint->fields->where('name', 'Excerpt')->first();
        $this->fieldContent = $this->matrix->blueprint->fields->where('name', 'Content')->first();

        $this->model = (new \Fusion\Services\Builders\Collection($this->matrix->handle))->make();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_with_permissions_can_update_a_single()
    {
        $attributes = [
            'name'    => 'Example Single',
            'slug'    => 'example-single',
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => true,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_single', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_without_control_panel_access_cannot_update_a_single()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('PATCH', '/api/singles/'.$this->matrix->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_without_permissions_cannot_update_a_single()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_cannot_create_a_single_without_required_fields()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'slug', 'status']);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_guest_can_visit_a_newly_created_single()
    {
        list($single, $attributes) = $this->newSingle();

        $this
            ->get($single->slug)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_without_admin_settings_can_view_an_enabled_single()
    {
        list($single, $attributes) = $this->newSingle();

        $this
            ->be($this->user)
            ->get($single->slug)
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_without_admin_settings_cannot_view_a_disabled_single()
    {
        $this->expectException(NotFoundHttpException::class);

        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->user)
            ->get($single->slug);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_with_admin_settings_cannot_view_a_disabled_single()
    {
        $this->expectException(NotFoundHttpException::class);

        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->owner)
            ->get($single->slug);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_with_admin_settings_can_preview_a_disabled_single()
    {
        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->owner)
            ->get($single->slug.'?preview=true')
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group matrix
     * @group single
     */
    public function a_user_without_admin_settings_cannot_preview_a_disabled_single()
    {
        $this->expectException(NotFoundHttpException::class);

        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->user)
            ->get($single->slug.'?preview=true');
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new entry w/ attributes
     * [Helper].
     *
     * @param array $overrides
     *
     * @return array
     */
    protected function newSingle($overrides = []): array
    {
        $attributes = array_merge([
            'name'    => 'Example Single',
            'slug'    => 'example-single',
            'excerpt' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
            'status'  => true,
        ], $overrides);

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, $attributes);

        $single = \DB::table($this->model->getTable())->first();

        return [$single, $attributes];
    }
}
