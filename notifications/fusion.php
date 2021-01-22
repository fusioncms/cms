<?php

return [
    'Authentication' => [
    	'New User Registration' => Fusion\Notifications\Auth\NewUserRegistration::class,
    ],

    // 'Users' => [
    // 	'New Role Created'      => Fusion\Notifications\Users\NewRoleCreated::class,
    // 	'Existing Role Updated' => Fusion\Notifications\Users\ExistingRoleUpdated::class,
    // 	'Existing Role Deleted' => Fusion\Notifications\Users\ExistingRoleDeleted::class,
    // ],

    'Backups' => [
    	'Backup Was Successful'      => Fusion\Notifications\Backups\BackupWasSuccessful::class,
    	'Backup Has Failed'          => Fusion\Notifications\Backups\BackupHasFailed::class,
    	// 'Cleanup Was Successful'     => Fusion\Notifications\Backups\CleanupWasSuccessful::class,
    	// 'Cleanup Has Failed'         => Fusion\Notifications\Backups\CleanupHasFailed::class,
    	// 'Healthy Backup Was Found'   => Fusion\Notifications\Backups\HealthyBackupWasFound::class,
    	// 'Unhealthy Backup Was Found' => Fusion\Notifications\Backups\UnhealthyBackupWasFound::class,
    ]
];
