<?php

namespace Fusion\Tests\Feature\Matrix;

use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Services\Builders;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class SingleTest extends TestCase
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

        $this->matrix = Matrix::factory()
            ->asSingle()
            ->withName('Single')
            ->withSEO('{slug}', 'index')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->hasFields(2)
                    ->create();
            })
            ->create();

        $this->field1 = $this->matrix->blueprint->fields->get(0);
        $this->field2 = $this->matrix->blueprint->fields->get(1);
    }

    /** @test */
    public function a_user_with_permissions_can_update_a_single()
    {
        $attributes = [
            'name'   => 'Example Single',
            'slug'   => 'example-single',
            'status' => true,
        ];

        $attributes[$this->field1->handle] = $this->faker->word();
        $attributes[$this->field2->handle] = $this->faker->word();

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_single', $attributes);
    }

    /** @test */
    public function a_user_without_control_panel_access_cannot_update_a_single()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('PATCH', '/api/singles/'.$this->matrix->id, []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_a_single()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, []);
    }

    /** @test */
    public function a_user_cannot_create_a_single_without_required_fields()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/singles/'.$this->matrix->id, [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'slug']);
    }

    /** @test */
    public function a_guest_can_visit_a_newly_created_single()
    {
        list($single, $attributes) = $this->newSingle();

        $this
            ->get($single->slug)
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_admin_settings_can_view_an_enabled_single()
    {
        list($single, $attributes) = $this->newSingle();

        $this
            ->be($this->user)
            ->get($single->slug)
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_admin_settings_cannot_view_a_disabled_single()
    {
        $this->expectException(ModelNotFoundException::class);

        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->user)
            ->get($single->slug);
    }

    /** @test */
    public function a_user_with_admin_settings_cannot_view_a_disabled_single()
    {
        $this->expectException(ModelNotFoundException::class);

        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->owner)
            ->get($single->slug);
    }

    /** @test */
    public function a_user_with_admin_settings_can_preview_a_disabled_single()
    {
        list($single, $attributes) = $this->newSingle(['status' => false]);

        $this
            ->be($this->owner)
            ->get($single->slug.'?preview=true')
            ->assertStatus(200);
    }

    /** @test */
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
            'matrix_id' => $this->matrix->id,
            'name'      => 'Example Single',
            'slug'      => 'example-single',
            'status'    => true,
        ], $overrides);

        $attributes[$this->field1->handle] = $this->faker->word();
        $attributes[$this->field2->handle] = $this->faker->word();

        $model = Builders\Matrix::resolve($this->matrix->handle);
        $entry = $model->create($attributes);

        return [$entry, $attributes];
    }
}
