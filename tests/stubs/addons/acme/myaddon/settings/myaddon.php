<?php

return [
    'name'        => 'Acme',
    'group'       => 'General',
    'icon'        => 'house',
    'description' => 'Configure settings for Acme Addon.',
    'settings'    => [
		'General' => [
            [
                'name'        => 'Allow likes',
                'handle'      => 'allow_likes',
                'description' => 'Control whether users can like items.',
                'type'        => 'select',
                'options'     => [
                    'enabled'  => 'Enabled',
                    'disabled' => 'Disabled',
                ],
                'default'  => 'enabled',
                'required' => true,
            ],
        ],
    ]
];