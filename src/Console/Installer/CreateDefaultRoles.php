<?php

namespace Fusion\Console\Installer;

use Spatie\Permission\Models\Role;

class CreateDefaultRoles
{
    /**
     * @var array
     */
    protected $roles = [
        'guest' => [
            'name'        => 'guest',
            'label'       => 'Guest',
            'description' => 'All guests of the website will be assigned this role automatically.',
        ],
        'user' => [
            'name'        => 'user',
            'label'       => 'User',
            'description' => 'Users have limited access to the website. They do not have control panel access.',
        ],
        'admin' => [
            'name'        => 'admin',
            'label'       => 'Administrator',
            'description' => 'Administrators have control panel access with a base set of assigned permissions.',
        ],
        'developer' => [
            'name'        => 'developer',
            'label'       => 'Developer',
            'description' => 'Developers have full control panel access, plus additional abilities for configuration.',
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
            Role::create($role);
        }
    }
}
