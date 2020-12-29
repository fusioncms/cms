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
            'level'       => 0,
            'description' => 'The owner has full, unlimited control panel access and permissions. This role is not editable.',
        ],
        'guest' => [
            'name'        => 'Guest',
            'level'       => 99,
            'description' => 'All non-logged, visiting users automatically assume this role.',
        ],
        'user' => [
            'name'        => 'User',
            'level'       => 5,
            'description' => 'Default role assigned to new users after creating an account.',
        ],
        'admin' => [
            'name'        => 'Administrator',
            'level'       => 1,
            'description' => 'Administrators have control panel access with a base set of assigned permissions.',
            'permissions' => [
                'access.controlPanel',
                'directories.viewAny', 'directories.view', 'directories.create', 'directories.update', 'directories.delete',
                'entries.viewAny', 'entries.view', 'entries.create', 'entries.update', 'entries.delete',
                'files.viewAny', 'files.view', 'files.create', 'files.update', 'files.delete', 'files.download',
                'blueprints.viewAny', 'blueprints.view', 'blueprints.create', 'blueprints.update', 'blueprints.delete',
                'forms.viewAny', 'forms.view', 'forms.create', 'forms.update', 'forms.delete',
                'matrices.viewAny', 'matrices.view', 'matrices.create', 'matrices.update', 'matrices.delete',
                'navigation.viewAny', 'navigation.view', 'navigation.create', 'navigation.update', 'navigation.delete',
                'nodes.viewAny', 'nodes.view', 'nodes.create', 'nodes.update', 'nodes.delete',
                'permissions.viewAny',
                'singles.viewAny', 'singles.view', 'singles.create', 'singles.update', 'singles.delete',
                'responses.viewAny', 'responses.view', 'responses.create', 'responses.update', 'responses.delete',
                'roles.viewAny', 'roles.view', 'roles.create', 'roles.update', 'roles.delete',
                'settings.viewAny', 'settings.view', 'settings.update',
                'taxonomies.viewAny', 'taxonomies.view', 'taxonomies.create', 'taxonomies.update', 'taxonomies.delete',
                'terms.viewAny', 'terms.view', 'terms.create', 'terms.update', 'terms.delete',
                'themes.viewAny', 'themes.view', 'themes.create', 'themes.update', 'themes.delete',
                'users.viewAny', 'users.view', 'users.create', 'users.update', 'users.delete',
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
        foreach ($this->roles as $handle => $role) {
            Role::firstOrCreate([
                'handle' => $handle,
            ], [
                'name'        => $role['name'],
                'guard_name'  => '*',
                'description' => $role['description'],
                'level'       => $role['level'],
            ])->givePermissionTo($role['permissions'] ?? []);
        }
    }
}
