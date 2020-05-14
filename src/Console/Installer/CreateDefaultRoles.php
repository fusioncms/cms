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
            'name'        => 'Guest',
            'description' => 'All guests of the website will be assigned this role automatically.',
        ],
        'user' => [
            'name'        => 'User',
            'description' => 'Users have limited access to the website. They can not access the admin backend or change any of its settings.',
        ],
        'admin' => [
            'name'        => 'Administrator',
            'description' => 'Administrators have full control over the website and can change all website settings, users, roles, and their permissions.',
        ],
        'developer' => [
            'name'        => 'Developer',
            'description' => 'Developers have full admin control, plus additional.',
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
                'description' => $role['description']
            ]);
        }
    }
}
