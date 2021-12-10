<?php

return [
    'name'        => 'API',
    'group'       => 'General',
    'icon'        => 'plug',
    'description' => 'Configure access to your websites API.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Personal Access Tokens',
                'handle'      => 'personal_access_tokens',
                'description' => 'Control whether personal access tokens are allowed or not.',
                'type'        => 'select',
                'options'     => ['enabled'  => 'Enabled', 'disabled' => 'Disabled'],
                'default'     => 'disabled',
                'required'    => true,
            ],
            [
                'name'        => 'Rate Limit',
                'handle'      => 'rate_limit',
                'description' => 'Set default request limit for users within a minute.',
                'type'        => 'number',
                'options'     => [ 'min'  => 20, 'max'  => 120, 'step' => 10 ],
                'default'     => '60',
                'required'    => true,
            ],
        ],
    ],
];
