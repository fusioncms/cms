<?php

namespace Fusion\Fieldtypes;

class SearchFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'URL';

    /**
     * @var string
     */
    public $icon = 'search';

    /**
     * @var string
     */
    public $description = 'URL input field.';

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
