<?php

return [
	// core permissions
	// --
	'backups'     => [ 'viewAny', 'create', 'delete', 'restore' ],
	'directories' => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'entries'     => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'extensions'  => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'files'       => [ 'viewAny', 'view', 'create', 'update', 'delete', 'download' ],
	'fieldset'    => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'forms'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'imports'     => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'mailables'   => [ 'view', 'update' ],
	'matrices'    => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'menus'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'modules'     => [ 'viewAny', 'create', 'update', 'delete' ],
	'nodes'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'singles'     => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'responses'   => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'roles'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'settings'    => [ 'viewAny', 'view', 'update' ],
	'taxonomies'  => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'terms'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'themes'      => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'users'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],

	// special permissions
	// --
	'access.controlPanel' => 'Control Panel Access',
];