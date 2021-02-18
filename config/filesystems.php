<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    */

    'disks' => [
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
