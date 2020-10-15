<?php

namespace Fusion\Tests\Feature\Users;

use Fusion\Models\Permission;
use Fusion\Models\Role;
use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function a_user_with_permissions_can_create_a_role()
    {
        $role = factory(Role::class)->make()->toArray();

        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/roles', $role)
            ->assertStatus(201);

        $this->assertDatabaseHas('roles', $role);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function roles_can_be_assigned_zero_to_many_permissions()
    {
        $role        = factory(Role::class)->create();
        $permissions = factory(Permission::class, 3)->create();

        $this
            ->be($this->owner, 'api')
            ->json(
                'PATCH',
                '/api/roles/'.$role->id,
                ['permissions' => $permissions->pluck('name')]
            )
            ->assertStatus(200);

        $permissions->each(function ($permission) use ($role) {
            $this->assertDatabaseHas('role_has_permissions', [
                'role_id'       => $role->id,
                'permission_id' => $permission->id,
            ]);
        });
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group auth
     */
    public function a_guest_cannot_not_create_a_role()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/roles', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_any_roles()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/roles');
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group permissions
     */
    public function a_user_without_permissions_cannot_view_a_role()
    {
        $this->expectException(AuthorizationException::class);

        $role = factory(Role::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('GET', '/api/roles/'.$role->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group permissions
     */
    public function a_user_without_permissions_cannot_create_new_roles()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/roles', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group permissions
     */
    public function a_user_without_permissions_cannot_update_existing_roles()
    {
        $this->expectException(AuthorizationException::class);

        $role = factory(Role::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', '/api/roles/'.$role->id, []);
    }

    /**
     * @test
     */
    public function a_user_without_permissions_cannot_delete_existing_roles()
    {
        $this->expectException(AuthorizationException::class);

        $role = factory(Role::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/roles/'.$role->id);
    }

    /**
     * @test
     */
    public function an_admin_can_only_delete_roles_below_their_level()
    {
        $this->expectException(AuthorizationException::class);

        $role = factory(Role::class)->create();

        $this->be($this->admin, 'api');

        $response = $this->json('DELETE', '/api/roles/'.$this->owner->role->id, [
            'transfer' => $this->user->role->id,
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group permissions
     */
    public function a_role_to_transfer_users_must_be_supplied_when_deleting_roles()
    {
        $role = factory(Role::class)->create();

        $this->be($this->owner, 'api');

        $this->json('DELETE', '/api/roles/'.$this->admin->role->id)
            ->assertStatus(400);

        $this->json('DELETE', '/api/roles/'.$this->admin->role->id, [
            'transfer' => $this->user->role->id,
        ])->assertStatus(200);

        $this->assertEquals($this->admin->fresh()->role->id, $this->user->role->id);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function a_user_cannot_create_a_role_without_required_fields()
    {
        $this
            ->be($this->owner, 'api')
            ->json('POST', '/api/roles', [])
            ->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'handle']);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function only_one_user_may_be_assigned_owner_at_a_time()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', '/api/users/'.$this->user->id, [
                'name'  => $this->user->name,
                'email' => $this->user->email,
                'role'  => 'owner',
            ]);

        $oldOwner = $this->owner->fresh();
        $newOwner = $this->user->fresh();

        $this->assertFalse($oldOwner->hasRole('owner'));
        $this->assertTrue($newOwner->hasRole('owner'));
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     */
    public function only_the_owner_may_reassign_the_owner_role()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', '/api/users/'.$this->admin->id, [
                'name'  => $this->admin->name,
                'email' => $this->admin->email,
                'role'  => 'owner',
            ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group password
     */
    public function an_administrator_can_not_update_the_owner_role()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->admin, 'api')
            ->json('PATCH', "/api/roles/{$this->owner->role->id}", [
                'name' => 'Not Owner Anymore',
            ]);
    }
}
