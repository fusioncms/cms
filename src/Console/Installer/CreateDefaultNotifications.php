<?php

namespace Fusion\Console\Installer;

use Fusion\Models\Channel;
use Fusion\Models\Notification;

class CreateDefaultNotifications
{
    /**
     * Default notification channels.
     * 
     * @var array
     */
    protected $channels = [
        'Mail',
    ];

    /**
     * Default notification types.
     * 
     * @var array
     */
    protected $notifications = [
        'auth' => [
            'New User Registration' => \Fusion\Notifications\Auth\NewUserRegistration::class,
        ],
        'backups' => [
            'Backup Has Failed'     => \Fusion\Notifications\Backups\BackupHasFailed::class,
            'Backup Was Successful' => \Fusion\Notifications\Backups\BackupWasSuccessful::class,
        ],
    ];

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        /**
         * Sync notification delivery channels.
         * 
         */
        foreach ($this->channels as $channel) {
            Channel::firstOrCreate([
                'handle' => str_handle($channel),
            ],[
                'name' => $channel,
            ]);
        }

        /**
         * Sync notification types.
         * 
         */
        foreach ($this->notifications as $group => $notifications) {
            foreach ($notifications as $name => $namespace) {
                Notification::firstOrCreate([
                    'handle' => str_handle("{$group}_{$name}"),
                ],[
                    'name'      => $name,
                    'namespace' => $namespace,
                ]);
            }
        }
    }
}
