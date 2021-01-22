<?php

return [
    'Authentication' => [
    	'New User Registration' => Fusion\Notifications\Auth\NewUserRegistration::class,
    ],

    'Backups' => [
    	'Backup Has Failed'     => Fusion\Notifications\Backups\BackupHasFailed::class,
    	'Backup Was Successful' => Fusion\Notifications\Backups\BackupWasSuccessful::class,
    ]
];
