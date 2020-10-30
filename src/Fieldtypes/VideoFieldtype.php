<?php

namespace Fusion\Fieldtypes;

class VideoFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Video';

    /**
     * @var string
     */
    public $icon = 'video';

    /**
     * @var string
     */
    public $description = 'Simple video input field.';

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
