<?php

return [
    'cookie' => env('SESSION_COOKIE', 'fusioncms_session'),
    'domain' => env('SESSION_DOMAIN', '.'.parse_url(url(''), PHP_URL_HOST)),
];
