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
        'initRows' => 1,
        'initCols' => 2,
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.initRows' => 'nullable|numeric',
        'settings.initCols' => 'nullable|numeric',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.initRows' => 'rows',
        'settings.initCols' => 'columns',
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'text',
    ];
}
