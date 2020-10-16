<?php

return [

	/*
    |--------------------------------------------------------------------------
    | Default Queue Driver
    |--------------------------------------------------------------------------
    |
    | The Laravel queue API supports a variety of back-ends via an unified
    | API, giving you convenient access to each back-end using the same
    | syntax for each one. Here you may set the default queue driver.
    |
    */
   
	'default' => env('QUEUE_DRIVER', 'database'),

	/*
    |--------------------------------------------------------------------------
    | Queue Connections
    |--------------------------------------------------------------------------
    |
    | Here you may configure the connection information for each server that
    | is used by your application. A default configuration has been added
    | for each back-end shipped with Laravel. You are free to add more.
    |
    */

	'connections' => [
		'database' => [
            'driver' => 'database',
            'table'  => 'queue',
            'queue'  => 'default',
            'expire' => 60,
        ],
	]
];