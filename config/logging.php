<?php

return [
    'channels' => [
        'composer' => [
            'driver' => 'single',
            'tap'    => [Fusion\Logging\ComposerFormatter::class],
            'path'   => storage_path('logs/composer.log'),
            'level'  => 'debug',
        ]
    ]
];
