<?php

return [
	'name'        => 'CORS',
	'group'       => 'General',
	'icon'        => 'lock',
	'description' => 'Configure Cross-Origin Resource Sharing.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Paths',
                'handle'      => 'cors_paths',
                'description' => 'You can enable CORS for 1 or multiple paths.',
                'type'        => 'list',
                'default'     => [ 'api/*' ],
                'override'    => 'cors.paths',
            ],
            [
                'name'        => 'Allowed Methods',
                'handle'      => 'cors_allowed_methods',
                'description' => 'Matches the request method.',
                'type'        => 'list',
                'default'     => [ '*' ],
                'override'    => 'cors.allowed_methods',
            ],
            [
                'name'        => 'Allowed Origins',
                'handle'      => 'cors_allowed_origins',
                'description' => 'Matches the request origin. Wildcards can be used, eg. *.mydomain.com',
                'type'        => 'list',
                'default'     => [ '*' ],
                'override'    => 'cors.allowed_origins',
            ],
            [
                'name'        => 'Allowed Origin Patterns',
                'handle'      => 'cors_allowed_origins_patterns',
                'description' => 'Matches the request origin with preg_match.',
                'type'        => 'list',
                'default'     => [ ],
                'override'    => 'cors.allowed_origins_patterns',
            ],
            [
                'name'        => 'Allowed Headers',
                'handle'      => 'cors_allowed_headers',
                'description' => 'Sets the Access-Control-Allow-Headers response header.',
                'type'        => 'list',
                'default'     => [ '*' ],
                'override'    => 'cors.allowed_headers',
            ],
            [
                'name'        => 'Exposed Headers',
                'handle'      => 'cors_exposed_headers',
                'description' => 'Sets the Access-Control-Expose-Headers response header.',
                'type'        => 'list',
                'default'     => [ ],
                'override'    => 'cors.exposed_headers',
            ],
            [
                'name'        => 'Max Age',
                'handle'      => 'cors_max_age',
                'description' => 'Sets the Access-Control-Max-Age response header.',
                'type'        => 'number',
                'options'     => [
                    'min'  => 0,
                    'max'  => 120,
                    'step' => 'any',
                ],
                'default'     => 0,
                'override'    => 'cors.max_age',
            ],
            [
                'name'        => 'Supports Credentials',
                'handle'      => 'cors_supports_credentials',
                'description' => 'Sets the Access-Control-Allow-Credentials header.',
                'type'        => 'toggle',
                'default'     => false,
                'override'    => 'cors.supports_credentials',
            ]
        ],
    ],
];