<?php

return [
	// owner only 
	// --
	// 'backups'
	// 'matrices'
	// 'extensions'
	// 'imports'
	// 'modules'
	// 'permissions'

	// core permissions
	// --
	'directories' => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'entries'     => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'files'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'field'       => [ 'reorder' ],
	'fieldset'    => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'forms'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'mailables'   => [ 'viewAny', 'view', 'update' ],
	'menus'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'nodes'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'pages'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'responses'   => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'roles'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'settings'    => [ 'viewAny', 'view', 'update' ],
	'taxonomies'  => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'terms'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],
	'users'       => [ 'viewAny', 'view', 'create', 'update', 'delete' ],

	// special permissions
	// --
	'access.admin' => 'Control Panel Access',
];