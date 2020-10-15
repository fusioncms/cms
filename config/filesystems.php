<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    */

    'disks' => [
        'temp' => [
            'driver' => 'local',
            'root'   => storage_path('temp'),
        ],

        'settings' => [
            'driver' => 'local',
            'root'   => storage_path('app/settings'),
        ],

        'themes' => [
            'driver' => 'local',
            'root'   => base_path('themes'),
        ],
    ],

];
