<?php

namespace Fusion\Fieldtypes;

class AudioFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Audio';

    /**
     * @var string
     */
    public $icon = 'headphones';

    /**
     * @var string
     */
    public $description = 'Simple audio input field.';

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
