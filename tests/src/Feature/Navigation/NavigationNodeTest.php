<?php

namespace Fusion\Tests\Feature\Navigation;

use Fusion\Models\Navigation;
use Fusion\Models\Section;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class NavigationNodeTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        $this->navigation = Navigation::factory()
            ->withName('Header')
            ->afterCreating(function (Navigation $navigation) {
                $section = Section::factory()
                    ->withBlueprint($navigation->blueprint)
                    ->hasFields(2)
                    ->create();
            })
            ->create();

        $this->model = (new \Fusion\Services\Builders\Navigation($this->navigation->handle))->make();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_new_navigation_node()
    {
        $attributes = [
            'name' => $this->faker->word,
            'url'  => $this->faker->url,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/navigation/{$this->navigation->id}/links", $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /** @test */
    public function an_order_is_generated_with_every_node()
    {
        \Illuminate\Database\Eloquent\Model::clearBootedModels();

        $attributes = [
            'name'  => $this->faker->word,
            'url'   => $this->faker->url,
            'order' => null,
        ];

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/navigation/{$this->navigation->id}/links", $attributes)
            ->assertStatus(201);

        $this->assertDatabaseHas($this->model->getTable(), [
            'name'  => $attributes['name'],
            'url'   => $attributes['url'],
            'order' => 1,
        ]);
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_navigation_node()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/navigation/{$this->navigation->id}/links", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_navigation_node()
    {
        $this->expectException(AuthorizationException::class);

        list($node, $attributes) = $this->newNavigationNode([
            'name' => 'Example',
            'url'  => 'https://example.com',
        ]);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/navigation/{$this->navigation->id}/links/{$node->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_new_navigation_nodes()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/navigation', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_navigation_nodes()
    {
        $this->expectException(AuthorizationException::class);

        list($node, $attributes) = $this->newNavigationNode([
            'name' => 'Example',
            'url'  => 'https://example.com',
        ]);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/navigation/{$this->navigation->id}/links/{$node->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_navigation_nodes()
    {
        $this->expectException(AuthorizationException::class);

        list($node, $attributes) = $this->newNavigationNode([
            'name' => 'Example',
            'url'  => 'https://example.com',
        ]);

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/navigation/{$this->navigation->id}/links/{$node->id}");
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_navigation_nodes()
    {
        list($node, $attributes) = $this->newNavigationNode([
            'name' => 'Example',
            'url'  => 'https://example.com',
        ]);

        // Update ----
        $attributes['name'] = 'Updated Name';
        $attributes['url']  = 'https://updated.com';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/navigation/{$this->navigation->id}/links/{$node->id}", $attributes)
            ->assertStatus(200);

        $this->assertDatabaseHas($this->model->getTable(), $attributes);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_navigation_node()
    {
        list($node, $attributes) = $this->newNavigationNode();

        // Delete ----
        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/navigation/{$this->navigation->id}/links/{$node->id}");

        $this->assertDatabaseMissing($this->model->getTable(), ['id' => $node->id]);
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new navigation node w/ attributes
     * [Helper].
     *
     * @param array $overrides
     *
     * @return array
     */
    protected function newNavigationNode($overrides = []): array
    {
        $attributes = array_merge([
            'name' => $this->faker->word,
            'url'  => $this->faker->url,
        ], $overrides);

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/navigation/{$this->navigation->id}/links", $attributes);

        $node = Navigation::first()->links->first();

        return [$node, $attributes];
    }
}
