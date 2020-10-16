<?php

return [
    // core permissions
    // --
    'backups'     => ['viewAny', 'view', 'create', 'update', 'delete', 'restore'],
    'directories' => ['viewAny', 'view', 'create', 'update', 'delete'],
    'entries'     => ['viewAny', 'view', 'create', 'update', 'delete'],
    'files'       => ['viewAny', 'view', 'create', 'update', 'delete', 'download'],
    'blueprints'  => ['viewAny', 'view', 'create', 'update', 'delete'],
    'forms'       => ['viewAny', 'view', 'create', 'update', 'delete'],
    'matrices'    => ['viewAny', 'view', 'create', 'update', 'delete'],
    'navigation'  => ['viewAny', 'view', 'create', 'update', 'delete'],
    'addons'      => ['viewAny', 'create', 'update', 'delete'],
    'nodes'       => ['viewAny', 'view', 'create', 'update', 'delete'],
    'permissions' => ['viewAny'],
    'singles'     => ['viewAny', 'view', 'create', 'update', 'delete'],
    'responses'   => ['viewAny', 'view', 'create', 'update', 'delete'],
    'roles'       => ['viewAny', 'view', 'create', 'update', 'delete'],
    'settings'    => ['viewAny', 'view', 'update'],
    'taxonomies'  => ['viewAny', 'view', 'create', 'update', 'delete'],
    'terms'       => ['viewAny', 'view', 'create', 'update', 'delete'],
    'themes'      => ['viewAny', 'view', 'create', 'update', 'delete'],
    'users'       => ['viewAny', 'view', 'create', 'update', 'delete'],

    // special permissions
    // --
    'access.controlPanel' => 'Control Panel Access',
];
