<?php

namespace Fusion\Fieldtypes;

class DictionaryFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Dictionary';

    /**
     * @var string
     */
    public $icon = 'book';

    /**
     * @var string
     */
    public $description = 'A simple list of key/values pairs.';

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
