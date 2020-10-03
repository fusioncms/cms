<?php

namespace Fusion\Console\Installer;

use Fusion\Models\Role;

class CreateDefaultRoles
{
    /**
     * @var array
     */
    protected $roles = [
        'owner' => [
            'name'        => 'Owner',
            'handle'      => 'owner',
            'level'       => 0,
            'description' => 'The owner has full, unlimited control panel access and permissions. This role is not editable.',
        ],
        'guest' => [
            'name'        => 'Guest',
            'handle'      => 'guest',
            'level'       => 99,
            'description' => 'All non-logged, visiting users automatically assume this role.',
        ],
        'user' => [
            'name'       => 'User',
            'handle'        => 'user',
            'level'       => 5,
            'description' => 'Default role assigned to new users after creating an account.',
        ],
        'admin' => [
            'name'        => 'Administrator',
            'handle'      => 'admin',
            'level'       => 1,
            'description' => 'Administrators have control panel access with a base set of assigned permissions.',
            'permissions' => [
                'access.controlPanel',
            ],
        ],
    ];

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->roles as $role) {
            Role::create([
                'name'        => $role['name'],
                'handle'      => $role['handle'],
                'guard_name'  => '*',
                'description' => $role['description'],
                'level'       => $role['level'],
            ])->givePermissionTo($role['permissions'] ?? []);
        }
    }
}
