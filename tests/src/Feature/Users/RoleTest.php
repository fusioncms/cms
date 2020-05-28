<?php

namespace Fusion\Tests\Feature\Users;

use Fusion\Tests\TestCase;
use Fusion\Models\User;
use Fusion\Models\Role;
use Fusion\Models\Permission;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
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
		$role = factory(Role::class)->create();
		$permissions = factory(Permission::class, 3)->create();

		// update ----
		$attributes = [
			'label'        => $role->label,
			'description' => 'New Description',
		];

		$this
			->be($this->owner, 'api')
			->json('PATCH', '/api/roles/' . $role->id,
				$attributes + ['permissions' => $permissions->pluck('name')])
			->assertStatus(200);

		$this->assertDatabaseHas('roles', $attributes);

		$permissions->each(function($permission) use ($role) {
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
            ->json('GET', '/api/roles/' . $role->id);
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
            ->json('PATCH', '/api/roles/' . $role->id, []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group role
     * @group permissions
     */
    public function a_user_without_permissions_cannot_delete_existing_roles()
    {
        $this->expectException(AuthorizationException::class);

        $role = factory(Role::class)->create();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', '/api/roles/' . $role->id);
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
			->assertJsonValidationErrors(['label']);
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
			->json('POST', '/api/users', [
				'name'                  => 'User B',
				'email'                 => 'user-b@example.com',
				'password'              => ($password = '@M-J"ga&t9f9P5'),
				'password_confirmation' => ($password),
				'role'                  => 'owner',
			]);

		$oldOwner = $this->owner->fresh();
		$newOwner = User::where('name', 'User B')->first();

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

		$admin = $this->createUser('Admin User', 'admin-user@example.com', 'secret', 'admin');
	
		$this
			->be($admin, 'api')
			->json('PATCH', '/api/users/' . $this->owner->id, [
				'name'  => $this->owner->name,
				'email' => $this->owner->email,
				'role'  => 'owner',
			]);
	}
}