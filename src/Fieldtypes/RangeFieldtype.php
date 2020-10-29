<?php

namespace Fusion\Fieldtypes;

class RangeFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Range';

    /**
     * @var string
     */
    public $icon = 'ruler-horizontal';

    /**
     * @var string
     */
    public $description = 'A simple range input field.';

    /**
     * @var string
     */
    public $cast = 'float';

    /**
     * @var array
     */
    public $column = [
        'type'     => 'float',
        'settings' => [24, 12],
    ];

    /**
     * @var array
     */
    public $settings = [
        'step' => 1,
        'min'  => 0,
        'max'  => 100,
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.step' => 'required|numeric',
        'settings.min'  => 'nullable|numeric',
        'settings.max'  => 'nullable|numeric',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.step' => 'step',
        'settings.min'  => 'min',
        'settings.max'  => 'max',
    ];
}
