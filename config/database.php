<?php

return [

	/*
    |--------------------------------------------------------------------------
    | Database Connections
    |--------------------------------------------------------------------------
    |
    */

	'connections' => [

		/**
		 * Settings for `spatie/laravel-backup` & `spatie/db-dumper`
		 *
		 * For reference:
		 * https://spatie.be/docs/laravel-backup/v4/installation-and-setup#dumping-the-database
         */

		'mysql' => [
			'dump' => [
			   'use_single_transaction',
			   'timeout' => 60,
			   'exclude_tables' => [ 'backups' ],
			]
		]

	]
];