<?php

namespace Fusion\Fieldtypes;

class SearchFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Search';

    /**
     * @var string
     */
    public $icon = 'search';

    /**
     * @var string
     */
    public $description = 'Search input field.';

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
