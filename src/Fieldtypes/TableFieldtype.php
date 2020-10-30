<?php

namespace Fusion\Fieldtypes;

class TableFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Table';

    /**
     * @var string
     */
    public $icon = 'table';

    /**
     * @var string
     */
    public $description = 'Flexible table field with simple field inputs.';

    /**
     * @var string
     */
    public $cast = 'collection';

    /**
     * @var array
     */
    public $settings = [

    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
