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
        'Storage' => [
            [
                'name'        => 'Disks',
                'handle'      => 'disks',
                'description' => 'The disk names on which the backups will be stored.',
                'type'        => 'checkbox',
                'options' => collect(config('filesystems.disks'))
                    ->filter(function ($disk) {
                        return $disk['driver'] !== 'local';
                    })
                    ->mapWithKeys(function ($disk, $key) {
                        return [$key => $key];
                    })
                    ->put('public','public')
                    ->all(),
                'default'     => ['public'],
                'override'    => 'backup.backup.destination.disks',
                'required'    => true,
            ],
        ],
        'Cleanup Strategy' => [
            [
                'name'        => 'Keep All Backps For Days',
                'handle'      => 'keep_all_backups_for_days',
                'description' => 'The number of days for which backups must be kept.',
                'type'        => 'number',
                'default'     => 7,
                'override'    => 'backup.backup.cleanup.default_strategy.keep_all_backups_for_days',
            ],
            [
                'name'        => 'Keep Daily Backups For Days',
                'handle'      => 'keep_daily_backups_for_days',
                'description' => 'The number of days for which daily backups must be kept.',
                'type'        => 'number',
                'default'     => 16,
                'override'    => 'backup.backup.cleanup.default_strategy.keep_daily_backups_for_days',
            ],
            [
                'name'        => 'Keep Weekly Backups For Weeks',
                'handle'      => 'keep_weekly_backups_for_weeks',
                'description' => 'The number of weeks for which one weekly backup must be kept.',
                'type'        => 'number',
                'default'     => 8,
                'override'    => 'backup.backup.cleanup.default_strategy.keep_weekly_backups_for_weeks',
            ],
            [
                'name'        => 'Keep Monthly Backups For Months',
                'handle'      => 'keep_monthly_backups_for_months',
                'description' => 'The number of months for which one monthly backup must be kept.',
                'type'        => 'number',
                'default'     => 4,
                'override'    => 'backup.backup.cleanup.default_strategy.keep_monthly_backups_for_months',
            ],
            [
                'name'        => 'Keep Yearly Backups For Years',
                'handle'      => 'keep_yearly_backups_for_years',
                'description' => 'The number of years for which one yearly backup must be kept.',
                'type'        => 'number',
                'default'     => 2,
                'override'    => 'backup.backup.cleanup.default_strategy.keep_yearly_backups_for_years',
            ],
        ]
    ],
];
