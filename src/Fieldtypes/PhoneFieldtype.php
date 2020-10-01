<?php

namespace Fusion\Fieldtypes;

class PhoneFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Phone';

    /**
     * @var string
     */
    public $icon = 'phone';

    /**
     * @var string
     */
    public $description = 'Phone number input field.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'placeholder' => '',
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
