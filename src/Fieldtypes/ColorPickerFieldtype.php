<?php

namespace Fusion\Fieldtypes;

class ColorPickerFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Color Picker';

    /**
     * @var string
     */
    public $icon = 'palette';

    /**
     * Excluded fieldables.
     * 
     * @var array
     */
    public $exclude = [
        'forms'
    ];

    /**
     * @var string
     */
    public $description = 'Choose a color with a handy plugin.';

    /**
     * @var string
     */
    public $cast = 'string';

    /**
     * @var array
     */
    public $settings = [
        'transparency' => true,
        'default'      => '',
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'string',
    ];
}
