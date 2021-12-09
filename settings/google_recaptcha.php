<?php

return [
    'name'        => 'Google reCAPTCHA',
    'group'       => 'Services',
    'icon'        => 'shield-alt',
    'description' => 'Configure your Google reCAPTCHA settings.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Site Key',
                'handle'      => 'recaptcha_site_key',
                'description' => 'Your Google reCAPTCHA site key.',
                'default'     => 'key',
                'required' => true,
            ],
            [
                'name'        => 'Secret Key',
                'handle'      => 'recaptcha_secret_key',
                'description' => 'Your Google reCAPTCHA secret key.',
                'default'     => 'key',
                'required' => true,
            ],
        ],
    ],
];
