<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Permission;
use Fusion\Models\Role;
use Fusion\Models\User;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Collection;

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
        $role = Role::where('name', 'user')->first();
        $role->givePermissionTo(['singles.create', 'singles.update']);

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
        $role = Role::where('name', 'user')->first();

        $this->assertInstanceOf(Collection::class, $role->users);
        $this->assertInstanceOf(User::class, $role->users->first());
    }
}
