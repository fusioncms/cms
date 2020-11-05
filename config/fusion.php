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
    | Custom Polymorphic Types
    |--------------------------------------------------------------------------
    |
    | By default, Laravel will use the fully qualified class name to store
    | the type of the related model. Here, you may define a "morph map"
    | to instruct Eloquent to use a custom name for each model.
    |
    */

    'relationships' => [
        // 'matrix' => 'Fusion\Models\Matrix',
        // 'type'   => 'Fusion\Models\Type',
    ],

    /*
    |--------------------------------------------------------------------------
    | Content Structures
    |--------------------------------------------------------------------------
    |
    */
    'structures' => [

        'forms'  => 'Forms',
        'matrix' => 'Matrix',
        'menus'  => 'Menus',
        'users'  => 'Users',

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
