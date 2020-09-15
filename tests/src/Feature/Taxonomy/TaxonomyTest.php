<?php

namespace Fusion\Tests\Feature\Taxonomy;

use Fusion\Tests\TestCase;
use Fusion\Models\Taxonomy;
use Illuminate\Support\Str;
use Facades\TaxonomyFactory;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Auth\Access\AuthorizationException;

class TaxonomyTest extends TestCase
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
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_with_permissions_can_create_a_new_taxonomy()
    {
        $attributes = [
            'name'    => ($name = 'Example Page'),
            'handle'  => str_handle($name),
            'slug'    => Str::slug($name),
            'sidebar' => '0',
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/taxonomies', $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas('taxonomies', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     * @group auth
     */
    public function a_user_without_permissions_can_not_create_a_new_taxonomy()
    {
        $this->expectException(AuthenticationException::class);

        $response = $this->json('POST', '/api/taxonomies', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_taxonomies()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/taxonomies');
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_a_taxonomy()
    {
        $this->expectException(AuthorizationException::class);

        $taxonomy = factory(Taxonomy::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/taxonomies/'.$taxonomy->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     * @group permission
     */
    public function a_user_without_permissions_cannot_create_new_taxonomies()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/taxonomies', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_taxonomies()
    {
        $this->expectException(AuthorizationException::class);

        $taxonomy = factory(Taxonomy::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/taxonomies/'.$taxonomy->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_taxonomies()
    {
        $this->expectException(AuthorizationException::class);

        $taxonomy = factory(Taxonomy::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/taxonomies/'.$taxonomy->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function a_user_with_permissions_can_update_an_existing_taxonomy()
    {
        $taxonomy = factory(Taxonomy::class)->create();

        // update ----
        $attributes           = $taxonomy->toArray();
        $attributes['name']   = 'New Name';
        $attributes['handle'] = 'new_name';
        $attributes['slug']   = 'new-name';

        unset($attributes['created_at'], $attributes['updated_at']);

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/taxonomies/'.$taxonomy->id, $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas('taxonomies', $attributes);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function each_taxonomy_must_have_a_valid_handle()
    {
        $attributes = [
            'name'    => ($name = 'Example Page'),
            'handle'  => '--invalid-handle',
            'slug'    => Str::slug($name),
            'sidebar' => '0',
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/taxonomies', $attributes)
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'handle' => 'Handle must contain only letters, numbers, and underscores.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group taxonomy
     */
    public function each_taxonomy_must_have_a_unique_slug_and_handle()
    {
        $taxonomy       = factory(Taxonomy::class)->create()->toArray();
        $taxonomy['id'] = null;

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/taxonomies', $taxonomy)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['slug', 'handle']);
    }

    /**
     * @test
     * @group feature
     * @group validation
     * @group taxonomy
     */
    public function taxonomy_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->owner, 'api');

        $this
            ->json('POST', '/api/taxonomies', ['handle' => 'default'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/taxonomies', ['handle' => 'for'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/taxonomies', ['handle' => 'true'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group taxonomy
     */
    public function when_a_taxonomy_is_created_an_associated_blueprint_should_also_be_created()
    {
        $this->actingAs($this->owner, 'api');

        $taxonomy = TaxonomyFactory::withName('Categories')->create();

        $this->assertDatabaseHas('blueprints', [
            'name'               => $taxonomy->name,
            'group'              => 'Taxonomy',
            'blueprintable_type' => get_class($taxonomy),
            'blueprintable_id'   => $taxonomy->id,
        ]);
    }
}
