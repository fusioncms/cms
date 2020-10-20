<?php

namespace Fusion\Tests\Feature\Navigation;

use Facades\NavigationFactory;
use Fusion\Models\Navigation;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class NavigationTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permissions_can_create_a_navigation()
    {
        $navigation = factory(Navigation::class)->make()->toArray();

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
        $this->actingAs($this->owner, 'api');

        $navigation = NavigationFactory::withName('Header')->create();

        $this->assertDatabaseHas('blueprints', [
            'name'  => $navigation->name,
            'group' => 'Navigation',
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

        $this->actingAs($this->owner, 'api');
        $navigation = factory(Navigation::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/navigation/'.$navigation->id);
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

        $this->actingAs($this->owner, 'api');
        $navigation = factory(Navigation::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/navigation/'.$navigation->id, []);
    }

    /** @test */
    public function a_user_without_permissions_cannot_delete_existing_navigation()
    {
        $this->expectException(AuthorizationException::class);

        $this->actingAs($this->owner, 'api');
        $navigation = factory(Navigation::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/navigation/'.$navigation->id);
    }

    /** @test */
    public function a_user_with_permissions_can_update_an_existing_navigation()
    {
        $this->actingAs($this->owner, 'api');

        $navigation = NavigationFactory::create();

        $data                = $navigation->toArray();
        $data['description'] = 'This is the new navigation description';

        $this
            ->json('PATCH', '/api/navigation/'.$navigation->id, $data)
            ->assertStatus(200);

        $this->assertDatabaseHas('navigation', [
            'name'        => $data['name'],
            'description' => $data['description'],
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_delete_an_existing_navigation()
    {
        $this->actingAs($this->owner, 'api');

        $navigation = NavigationFactory::create();

        $this
            ->json('DELETE', '/api/navigation/'.$navigation->id)
            ->assertStatus(200);

        $this->assertDatabaseMissing('navigation', [
            'name' => $navigation->name,
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_move_a_navigation_node_before_another()
    {
        $this->actingAs($this->owner, 'api');

        $navigation = $navigation = NavigationFactory::withName('Test')->create();

        $nodeOne = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node One',
                'url'  => 'https://example.com/node-one',
            ])
            ->getData()->data;

        $nodeTwo = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node Two',
                'url'  => 'https://example.com/node-two',
            ])
            ->getData()->data;

        $this->json('POST', '/api/navigation/'.$navigation->id.'/nodes/move/before', [
            'move'   => $nodeTwo->id,
            'before' => $nodeOne->id,
        ]);

        $this->assertDatabaseHas($navigation->table, [
            'name'  => $nodeTwo->name,
            'order' => 0.0,
        ]);
    }

    /** @test */
    public function a_user_with_permissions_can_move_a_navigation_node_after_another()
    {
        $this->actingAs($this->owner, 'api');

        $navigation = $navigation = NavigationFactory::withName('Test')->create();

        $nodeOne = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node One',
                'url'  => 'https://example.com/node-one',
            ])
            ->getData()->data;

        $nodeTwo = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node Two',
                'url'  => 'https://example.com/node-two',
            ])
            ->getData()->data;

        $nodeThree = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node Three',
                'url'  => 'https://example.com/node-three',
            ])
            ->getData()->data;

        $this->json('POST', '/api/navigation/'.$navigation->id.'/nodes/move/after', [
            'move'  => $nodeOne->id,
            'after' => $nodeTwo->id,
        ]);

        $this->assertDatabaseHas($navigation->table, [
            'name'  => $nodeOne->name,
            'order' => 2.5,
        ]);
    }

    /** @test */
    public function navigation_nodes_can_be_refreshed()
    {
        $this->actingAs($this->owner, 'api');

        $navigation = $navigation = NavigationFactory::withName('Test')->create();

        $nodeOne = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node One',
                'url'  => 'https://example.com/node-one',
            ])
            ->getData()->data;

        $nodeTwo = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node Two',
                'url'  => 'https://example.com/node-two',
            ])
            ->getData()->data;

        $nodeThree = $this
            ->json('POST', '/api/navigation/'.$navigation->id.'/nodes', [
                'name' => 'Node Three',
                'url'  => 'https://example.com/node-three',
            ])
            ->getData()->data;

        $this->json('POST', '/api/navigation/'.$navigation->id.'/nodes/move/after', [
            'move'  => $nodeOne->id,
            'after' => $nodeTwo->id,
        ]);

        $this->json('PATCH', '/api/navigation/'.$navigation->id.'/nodes/refresh');

        $this->assertDatabaseHas($navigation->table, ['name' => $nodeTwo->name, 'order' => 1]);
        $this->assertDatabaseHas($navigation->table, ['name' => $nodeOne->name, 'order' => 2]);
        $this->assertDatabaseHas($navigation->table, ['name' => $nodeThree->name, 'order' => 3]);
    }

    /** @test */
    public function each_navigation_must_have_a_unique_handle()
    {
        $this->actingAs($this->owner, 'api');

        $navigation       = factory(Navigation::class)->create()->toArray();
        $navigation['id'] = null;

        $this
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
}
