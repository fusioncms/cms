<?php

namespace Fusion\Tests\Feature\Matrix;

use Fusion\Models\Matrix;
use Fusion\Models\Section;
use Fusion\Services\Builders\Collection;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CollectionTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->matrix = Matrix::factory()
            ->asCollection()
            ->withName('Collectibles')
            ->withSEO('collectibles/{slug}', 'index')
            ->afterCreating(function (Matrix $matrix) {
                Section::factory()
                    ->withBlueprint($matrix->blueprint)
                    ->hasFields(2)
                    ->create();
            })
            ->create();

        $this->model  = (new Collection($this->matrix->handle))->make();
        $this->field1 = $this->matrix->blueprint->fields->get(0);
        $this->field2 = $this->matrix->blueprint->fields->get(1);
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_new_collection_entry()
    {
        $attributes = [
            'name'   => 'Example Page',
            'slug'   => 'example-page',
            'status' => 1,
        ];

        $attributes[$this->field1->handle] = $this->faker->word();
        $attributes[$this->field2->handle] = $this->faker->word();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->slug}", $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('mx_collectibles', $attributes);
    }

    /** @test */
    public function a_user_without_control_panel_access_cannot_create_new_collection_entries()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', "/api/collections/{$this->matrix->slug}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_collection_entries()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/collections/{$this->matrix->slug}", []);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_collection_entry()
    {
        list($entry, $attributes) = $this->newEntry([
            'name' => 'New Post Title',
            'slug' => 'new-post-title',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Post Title';
        $attributes['slug'] = 'updated-post-title';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/collections/{$this->matrix->slug}/{$entry->id}", $attributes)
            ->assertStatus(200);

        $this->assertDatabaseMissing($this->model->getTable(), [
            'name' => 'New Post Title',
            'slug' => 'new-post-title',
        ]);

        $this->assertDatabaseHas($this->model->getTable(), [
            'name' => 'Updated Post Title',
            'slug' => 'updated-post-title',
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_collection_entry()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/collections/{$this->matrix->slug}/{$entry->id}");

        $this->assertDatabaseMissing('mx_collectibles', ['id' => $entry->id]);
    }

    /** @test */
    public function each_collection_must_have_a_unique_slug()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/collections/{$this->matrix->slug}", $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug']);
    }

    /** @test */
    public function a_user_without_admin_settings_can_view_an_enabled_collection_entry()
    {
        list($entry, $attributes) = $this->newEntry();

        $this
            ->be($this->user)
            ->get('/collectibles/'.$entry->slug)
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_admin_settings_cannot_view_a_disabled_collection_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->user)
            ->get('/collectibles/'.$entry->slug);
    }

    /** @test */
    public function a_user_with_admin_settings_cannot_view_a_disabled_collection_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->owner)
            ->get('/collectibles/'.$entry->slug);
    }

    /** @test */
    public function a_user_with_admin_settings_can_preview_a_disabled_collection_entry()
    {
        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->owner)
            ->get("/collectibles/{$entry->slug}?preview=true")
            ->assertStatus(200);
    }

    /** @test */
    public function a_user_without_admin_settings_cannot_preview_a_disabled_collection_entry()
    {
        $this->expectException(NotFoundHttpException::class);

        list($entry, $attributes) = $this->newEntry(['status' => false]);

        $this
            ->be($this->user)
            ->get("/collectibles/{$entry->slug}?preview=true");
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
    protected function newEntry($overrides = []): array
    {
        $attributes = array_merge([
            'matrix_id' => $this->matrix->id,
            'name'      => 'Example Page',
            'slug'      => 'example-page',
            'status'    => true,
        ], $overrides);

        $attributes[$this->field1->handle] = $this->faker->word();
        $attributes[$this->field2->handle] = $this->faker->word();

        $model = (new Collection($this->matrix->handle))->make();
        $entry = $model->create($attributes);

        return [$entry, $attributes];
    }
}
