<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Support\Collection;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleTest extends TestCase
{
	use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group roles
     */
    public function each_role_can_have_one_or_many_permissions()
    {
        $role = Role::where('name', 'User')->first();
        $role->givePermissionTo(['pages.create', 'pages.update']);

        $this->assertInstanceOf(Collection::class, $role->permissions);
        $this->assertInstanceOf(Permission::class, $role->permissions->first());
    }

    /**
     * @test
     * @group unit
     * @group roles
     */
    public function each_role_can_have_one_or_many_users()
    {
        $role = Role::where('name', 'User')->first();

        $this->assertInstanceOf(Collection::class, $role->users);
        $this->assertInstanceOf(User::class, $role->users->first());
    }
}