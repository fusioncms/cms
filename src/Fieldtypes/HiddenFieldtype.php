<?php

namespace Fusion\Fieldtypes;

class HiddenFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Hidden';

    /**
     * @var string
     */
    public $icon = 'ghost';

    /**
     * @var string
     */
    public $description = 'Hidden input field.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'value' => '',
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];

    /**
     * @var array
     */
    public $validation = [];  // no validation
}
