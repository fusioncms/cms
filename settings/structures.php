<?php

return [
    'name'        => 'Structures',
    'group'       => 'General',
    'icon'        => 'toolbox',
    'description' => 'Configure which Fieldtypes are allowed per Structure.',
    'settings'    => [
        'General' => [
            [
                'name'        => 'Structures Fieldtypes',
                'handle'      => 'structures_fieldtypes',
                'description' => 'Manage Structure Fieldtypes.',
                'component'   => 'structures-fieldtypes',
            ],
        ],
    ],
];
