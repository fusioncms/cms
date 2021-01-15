<?php

return [
    'name'        => 'Backups',
    'group'       => 'Services',
    'icon'        => 'save',
    'description' => 'Configure backup schedule and cleanup strategy settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Auto Backups',
                'handle'      => 'backups_auto',
                'description' => 'Control whether backups will run on a regular schedule or not.',
                'type'        => 'select',
                'options'     => ['enabled'  => 'Enabled', 'disabled' => 'Disabled'],
                'default'     => 'disabled',
                'required'    => true,
            ],
        ],
        'Notifications' => [
            [
                'name'      => 'Backup Has Failed',
                'handle'    => 'backups_notifications_backup_has_failed',
                'component' => 'settings-notifications',
                'type'      => 'dictionary',
                'default'   => [
                    'mail' => [
                        'enabled' => true,
                        'users'   => []
                    ],
                    'slack' => [
                        'enabled' => false,
                        'users'   => []
                    ],
                ],
            ]
        ]
    ],
];
