<?php

namespace Fusion\Tests\Feature\Navigation;

use Fusion\Models\Navigation;
use Fusion\Services\Builders;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;

class NavigationTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // --
        $this->menu = Navigation::factory()->withName('Main Menu')->create();
    }

    /** @test */
    public function only_admins_can_request_control_panel_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/admin/navigation');

        $this
            ->be($this->owner, 'api')
            ->json('GET', '/api/admin/navigation')
            ->assertOk();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_navigation()
    {
        $navigation = Navigation::factory()->make()->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/navigation', $navigation)
            ->assertStatus(201);

        $this->assertDatabaseHas('navigation', [
            'name'   => $navigation['name'],
            'handle' => $navigation['handle'],
        ]);
    }

    /** @test */
    public function when_a_navigation_is_created_an_associated_blueprint_should_also_be_created()
    {
        $this->assertDatabaseHas('blueprints', [
            'name'      => $this->menu->name,
            'structure' => 'Navigation',
        ]);
    }

    /** @test */
    public function a_guest_cannot_create_a_new_navigation()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/navigation', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_any_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/navigation');
    }

    /** @test */
    public function a_user_without_permissions_cannot_view_a_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/navigation/{$this->menu->id}");
    }

    /** @test */
    public function a_user_without_permissions_cannot_create_a_new_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/navigation', []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_update_existing_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/navigation/{$this->menu->id}", []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/navigation/{$this->menu->id}");
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_navigation()
    {
        $data                = $this->menu->toArray();
        $data['description'] = 'This is the new navigation description';

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/navigation/{$this->menu->id}", $data)
            ->assertStatus(200);

        $this->assertDatabaseHas('navigation', [
            'name'        => $data['name'],
            'description' => $data['description'],
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_navigation()
    {
        $this
            ->be($this->owner, 'api')
            ->json('DELETE', "/api/navigation/{$this->menu->id}")
            ->assertStatus(200);

        $this->assertDatabaseMissing('navigation', ['name' => $this->menu->name]);
    }

    /** @test */
    public function a_user_with_permissions_can_move_a_navigation_node_before_another()
    {
        list($node1, $attrs1) = $this->newNode($this->menu, ['name' => 'Node One']);
        list($node2, $attrs2) = $this->newNode($this->menu, ['name' => 'Node Two']);

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/navigation/{$this->menu->id}/links/before", [
                'move'   => $node2->id,
                'before' => $node1->id,
            ]);

        $this->assertDatabaseHas($this->menu->getBuilderTable(), [
            'name'  => $node1->name,
            'order' => 1.0,
        ]);

        $this->assertDatabaseHas($this->menu->getBuilderTable(), [
            'name'  => $node2->name,
            'order' => 0.0,
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_move_a_navigation_node_after_another()
    {
        list($node1, $attrs1) = $this->newNode($this->menu, ['name' => 'Node One']);
        list($node2, $attrs2) = $this->newNode($this->menu, ['name' => 'Node Two']);
        list($node3, $attrs3) = $this->newNode($this->menu, ['name' => 'Node Three']);

        $this
            ->be($this->owner, 'api')
            ->json('POST', "/api/navigation/{$this->menu->id}/links/after", [
                'move'  => $node1->id,
                'after' => $node2->id,
            ]);

        $this->assertDatabaseHas($this->menu->getBuilderTable(), [
            'name'  => $node1->name,
            'order' => 2.5,
        ]);
    }

    /** @test */
    public function navigation_nodes_can_be_refreshed_after_reordering()
    {
        list($node1, $attrs1) = $this->newNode($this->menu, ['name' => 'Node One']);
        list($node2, $attrs2) = $this->newNode($this->menu, ['name' => 'Node Two']);
        list($node3, $attrs3) = $this->newNode($this->menu, ['name' => 'Node Three']);

        $node1->update(['order' => 10]);
        $node2->update(['order' => 3]);
        $node3->update(['order' => 2]);

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', "/api/navigation/{$this->menu->id}/links/refresh");

        $this->assertDatabaseHas($this->menu->getBuilderTable(), ['name' => $node1->name, 'order' => 3]);
        $this->assertDatabaseHas($this->menu->getBuilderTable(), ['name' => $node2->name, 'order' => 2]);
        $this->assertDatabaseHas($this->menu->getBuilderTable(), ['name' => $node3->name, 'order' => 1]);
    }

    /** @test */
    public function each_navigation_must_have_a_unique_handle()
    {
        $navigation       = $this->menu->toArray();
        $navigation['id'] = null;

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/navigation', $navigation)
            ->assertStatus(422)
            ->assertJsonValidationErrors(['handle']);
    }

    /** @test */
    public function navigation_handle_must_not_be_a_reserved_keyword()
    {
        $this->actingAs($this->owner, 'api');

        $this
            ->json('POST', '/api/navigation', ['handle' => 'default'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/navigation', ['handle' => 'for'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);

        $this
            ->json('POST', '/api/navigation', ['handle' => 'true'])
            ->assertJsonValidationErrors([
                'handle' => 'The handle conflicts with a reserved keyword and may not be used.',
            ]);
    }

    //
    // ------------------------------------------------
    //

    /**
     * Returns new node w/ attributes
     * [Helper].
     *
     * @param \Fusion\Models\Navigation $navigation
     * @param array                     $overrides
     *
     * @return array
     */
    private function newNode(Navigation $navigation, $overrides = [])
    {
        $model = Builders\Navigation::resolve($this->menu->handle);

        $attributes = array_merge([
            'navigation_id' => $navigation->id,
            'name'          => $this->faker->name,
            'url'           => $this->faker->url,
            'order'         => $model->orderLast(),
            'status'        => true,
        ], $overrides);

        $node  = $model->create($attributes);

        return [$node, $attributes];
    }
}
