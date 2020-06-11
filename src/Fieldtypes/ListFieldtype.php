<?php

namespace Fusion\Fieldtypes;

class ListFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'List';

    /**
     * @var string
     */
    public $icon = 'list';

    /**
     * @var string
     */
    public $description = 'A simple list of values.';

    /**
     * @var string
     */
    public $cast = 'collection';

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
