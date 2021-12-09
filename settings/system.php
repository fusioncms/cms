<?php

return [
    'name'        => 'System',
    'group'       => 'General',
    'icon'        => 'sliders-h',
    'description' => 'Global system settings of your website.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Theme',
                'handle'      => 'theme',
                'description' => 'The desired theme for the public frontend.',
                'default'     => 'Hello',
                'hidden'      => true,
            ],
            [
                'name'        => 'Website Title',
                'handle'      => 'website_title',
                'default'     => 'My FusionCMS Website',
                'required'    => true,
            ],
            [
                'name'        => 'Website Slogan',
                'handle'      => 'website_slogan',
                'default'     => 'Another awesome website powered by FusionCMS!',
                'required'    => true,
            ],
            [
                'name'        => 'Base URL',
                'handle'      => 'site_url',
                'description' => 'The URL of the website for email links and for use around the CMS.',
                'default'     => 'http://localhost',
                'required'    => true,
            ],
            [
                'name'        => 'Site Visibility',
                'handle'      => 'site_visibility',
                'description' => 'The Site Visibility setting controls who can view your site, allowing you to make the site private (requiring login) or public.',
                'type'        => 'select',
                'options'     => [
                    'public'  => 'Public',
                    'private' => 'Private',
                ],
                'default'  => 'public',
                'required' => true,
            ],
        ],
    ],
];
