<?php

return [
    'channels' => [
        'backups' => [
            'driver' => 'single',
            'path'   => storage_path('logs/backups.log'),
            'level'  => 'debug',
        ],
        'composer' => [
            'driver' => 'single',
            'tap'    => [Fusion\Logging\ComposerFormatter::class],
            'path'   => storage_path('logs/composer.log'),
            'level'  => 'debug',
        ],
    ],
];
