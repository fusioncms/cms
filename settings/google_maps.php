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
                'handle'      => 'google_maps_api',
                'description' => 'Your Google Maps API key.',
            ],
        ],
    ],
];