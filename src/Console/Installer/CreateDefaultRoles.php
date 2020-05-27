<?php

namespace Fusion\Console\Installer;

use Fusion\Models\Role;

class CreateDefaultRoles
{
    /**
     * @var array
     */
    protected $roles = [
        'guest' => [
            'name'        => 'guest',
            'label'       => 'Guest',
            'description' => 'All non-logged, visiting users automatically assume this role.',
        ],
        'user' => [
            'name'        => 'user',
            'label'       => 'User',
            'description' => 'Default role assigned to new users after creating an account.',
        ],
        'admin' => [
            'name'        => 'admin',
            'label'       => 'Administrator',
            'description' => 'Administrators have control panel access with a base set of assigned permissions.',
            'permissions' => [
                'access.controlPanel'
            ],
        ],
        'owner' => [
            'name'        => 'owner',
            'label'       => 'Owner',
            'description' => 'Owners have full control panel access.',
        ]
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
            'guard_name'  => '*',
            'label'       => $role['label'],
            'description' => $role['description'],
            ])->givePermissionTo($role['permissions'] ?? []);
        }
    }
}
