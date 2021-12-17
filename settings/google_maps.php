<?php

return [
    'name'        => 'Google Maps',
    'group'       => 'Services',
    'icon'        => 'map-marked-alt',
    'description' => 'Configure your Google Maps settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'API Key',
                'handle'      => 'maps_api_key',
                'description' => 'Your Google Maps API key.',
                'default'     => 'key',
                'required' => true,
            ],
        ],
    ],
];
