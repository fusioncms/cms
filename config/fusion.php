<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Admin Control Panel Path
    |--------------------------------------------------------------------------
    |
    | Most CMS' come with a hard-coded path to the bundled admin control
    | panel. This could lead to unethical end users being able to easily
    | identify what your website is running. We let you change this!
    |
    */

    'path' => 'admin',

    /*
    |--------------------------------------------------------------------------
    | Authentication provider
    |--------------------------------------------------------------------------
    |
    */

    'authenticate' => [

        'middleware' => App\Http\Middleware\Authenticate::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Public RSS Feeds
    |--------------------------------------------------------------------------
    |
    */
    'feeds' => [
        'releases' => 'https://beta.getfusioncms.com/releases.json',
    ],

    /*
    |--------------------------------------------------------------------------
    | Composer Service Configs
    |--------------------------------------------------------------------------
    |
    */
    'composer' => [
        'memory_limit' => '2048M',
    ],
];
