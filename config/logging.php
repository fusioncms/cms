<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, Laravel uses the Monolog PHP logging library. This gives
    | you a variety of powerful log handlers / formatters to utilize.
    |
    */

    'channels' => [

        'composer' => [
            'driver' => 'single',
            'tap'    => [Fusion\Logging\ComposerFormatter::class],
            'path'   => storage_path('logs/composer.log'),
            'level'  => 'debug',
        ],

    ],
];
