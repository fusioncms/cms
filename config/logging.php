<?php

return [
    'channels' => [
        'composer' => [
            'driver' => 'single',
            'path'   => storage_path('logs/composer.log'),
            'level'  => 'debug',
        ]
    ]
];
