<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel server requirements
    |--------------------------------------------------------------------------
    |
    | Reference:
    |   https://laravel.com/docs/master/installation#server-requirements
    |
    */

    'requirements' => [
        'php'        => '7.2.5',
        'extensions' => [
            'bcmath',
            'ctype',
            'fileinfo',
            'json',
            'mbstring',
            'openssl',
            'pdo',
            'tokenizer',
            'xml',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Laravel folder permission requirements
    |--------------------------------------------------------------------------
    |
    | Reference:
    |   https://laravel.com/docs/master/installation#configuration
    |
    */

   'permissions' => [
       'storage/framework/' => '755',
       'storage/logs/'      => '755',
       'bootstrap/cache/'   => '755',
   ],

   /*
    |--------------------------------------------------------------------------
    | Installation wizard
    |--------------------------------------------------------------------------
    |
    |
    */

    'wizard' => [

        /**
         * Form data will be saved into cache using:
         * `key`     - cache identifier
         * `expires` - in minutes.
         */
        'storage' => [
            'key'     => 'installer',
            'expires' => 30,
        ],

        /**
         * Form steps.
         */
        'steps' => [
            'index'  => [],
            'server' => [
                'rules' => [
                    'server' => 'required|serverrequirements',
                ],
            ],
            'permissions' => [
                'rules' => [
                    'permissions' => 'required|permissionrequirements',
                ],
            ],
            'user' => [
                'rules' => [
                    'user_email'    => 'required|email',
                    'user_name'     => 'required',
                    'user_password' => 'required|securepassword',
                    'user_confirm'  => 'required_with:user_password|same:user_password',
                ],
            ],
            'app' => [
                'rules' => [
                    'app_key'   => 'required',
                    'app_env'   => 'required',
                    'app_debug' => 'required',
                    'app_name'  => 'required',
                    'app_url'   => 'required|url',
                ],
            ],
            'database' => [
                'rules' => [
                    'db_driver'    => 'required',
                    'db_host'      => 'required',
                    'db_database'  => 'required',
                    'db_username'  => 'required',
                    'db_password'  => 'required',
                    'db_charset'   => 'required',
                    'db_collation' => 'required',
                ],
            ],
            'confirm' => [],
        ],
    ],
];
