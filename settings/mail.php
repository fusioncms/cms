<?php

return [
    'name'        => 'Mail',
    'group'       => 'Services',
    'icon'        => 'mail-bulk',
    'description' => 'Configure your desired email provider.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Driver',
                'handle'      => 'mail_default',
                'description' => 'Select the desired e-mail driver.',
                'type'        => 'select',
                'options'     => ['sendmail' => 'Sendmail', 'smtp' => 'SMTP', 'sparkpost' => 'SparkPost', 'mailgun' => 'Mailgun', 'mandrill' => 'Mandrill', 'log' => 'Log'],
                'default'     => 'smtp',
                'override'    => 'mail.default',
                'required'    => true,
            ],
            [
                'name'        => 'From Address',
                'handle'      => 'mail_server',
                'description' => 'All e-mails to users will come from this e-mail address.',
                'default'     => 'server@example.com',
                'override'    => 'mail.from.address',
                'required'    => true,
            ],
            [
                'name'        => 'From Name',
                'handle'      => 'mail_name',
                'description' => 'E-mail sent out to users will be attributed with this name.',
                'default'     => 'Wendell',
                'override'    => 'mail.from.name',
                'required'    => true,
            ],
        ],
        'Sendmail' => [
            [
                'name'        => 'Host',
                'handle'      => 'mail_sendmail_host',
                'description' => 'The host name sendmail server.',
                'default'     => 'localhost',
                'override'    => 'mail.host',
            ],
        ],
        'SMTP' => [
            [
                'name'        => 'Host',
                'handle'      => 'mail_smtp_host',
                'description' => 'The host name of your SMTP server.',
                'default'     => 'smtp.example.com',
                'override'    => 'mail.mailers.smtp.host',
                'required'    => true,
            ],
            [
                'name'        => 'Port',
                'handle'      => 'mail_smtp_port',
                'description' => 'The port number of your SMTP server.',
                'default'     => '587',
                'override'    => 'mail.mailers.smtp.port',
                'required'    => true,
            ],
            [
                'name'        => 'SMTP Username',
                'handle'      => 'mail_smtp_username',
                'description' => 'The username for your SMTP server.',
                'default'     => 'username',
                'override'    => 'mail.mailers.smtp.username',
                'required'    => true,
            ],
            [
                'name'        => 'SMTP Password',
                'handle'      => 'mail_smtp_password',
                'description' => 'The password for your SMTP server.',
                'default'     => 'password',
                'override'    => 'mail.mailers.smtp.password',
                'required'    => true,
            ],
        ],
        'Sparkpost' => [
            [
                'name'        => 'Secret',
                'handle'      => 'mail_sparkpost_secret',
                'description' => 'Secret key assigned after setting up your SparkPost account.',
                'default'     => 'secret',
                'required'    => true,
            ],
        ],
        'Mailgun' => [
            [
                'name'        => 'Domain',
                'handle'      => 'mail_mailgun_domain',
                'description' => 'Domain of your Mailgun account.',
                'default'     => 'domain',
                'required'    => true,
            ],
            [
                'name'        => 'Secret',
                'handle'      => 'mail_mailgun_secret',
                'description' => 'Secret key assigned after setting up your Mailgun account.',
                'default'     => 'secret',
                'required'    => true,
            ],
        ],
        'Mandrill' => [
            [
                'name'        => 'Secret',
                'handle'      => 'mail_mandrill_secret',
                'description' => 'Secret key assigned after setting up your Mandrill account.',
                'default'     => 'secret',
                'required'    => true,
            ],
        ],
        'Subjects' => [
            [
                'name'        => 'User Registered Subject',
                'handle'      => 'mail_subject_user_registered',
                'description' => 'Email subject for user welcome message.',
                'default'     => 'Welcome!',
                'required'    => true,
            ],
            [
                'name'        => 'User Verification Subject',
                'handle'      => 'mail_subject_user_verification',
                'description' => 'Email subject for user verification.',
                'default'     => 'Please verify your email',
                'required'    => true,
            ],
            [
                'name'        => 'Forgot Password Subject',
                'handle'      => 'mail_subject_user_reset_password',
                'description' => 'Email subject for requesting a password reset.',
                'default'     => 'Password Reset Request',
                'required'    => true,
            ],
        ],
    ],
];
