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

    /*
    |--------------------------------------------------------------------------
    | Builders
    |--------------------------------------------------------------------------
    |
    */
   'builders' => [
        'fieldset' => [
            'prefix'    => 'fx',
            'namepsace' => Fusion\Services\Builders\Fieldset::class
        ],
        'matrix' => [
            'prefix'    => 'mx',
            'namepsace' => Fusion\Services\Builders\Matrix::class
        ],
        
   ],

    /*
    |--------------------------------------------------------------------------
    | Structure & Fieldtype Exclusions.
    |--------------------------------------------------------------------------
    |
    */
    'structures' => [
        [
            'name'     => 'Collections',
            'excluded' => [],
        ],
        [
            'name'     => 'Fieldsets',
            'excluded' => ['fieldset'],
        ],
        [
            'name'     => 'Forms',
            'excluded' => ['audio', 'asset', 'code', 'color_picker', 'dictionary', 'form', 'list', 'markdown', 'replicator', 'table', 'taxonomy', 'user', 'video'],
        ],
        [
            'name'     => 'Navigation',
            'excluded' => ['audio', 'taxonomy', 'user', 'video'],
        ],
        [
            'name'     => 'Replicator',
            'excluded' => ['replicator'],
        ],
        [
            'name'     => 'Singles',
            'excluded' => [],
        ],
        [
            'name'     => 'Taxonomies',
            'excluded' => [],
        ],
    ],
];
