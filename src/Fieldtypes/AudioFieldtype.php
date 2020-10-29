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

    /**
     * Get custom rules when saving field.
     *
     * @param Field $field
     * @param mixed $value
     *
     * @return array
     */
    // public function rules(Field $field, $value = null)
    // {
    //     $validation = explode('|', $field->validation ?: 'sometimes');
    //     $validation = array_merge($validation, ['url']);

    //     return [
    //         $field->handle => $validation,
    //     ];
    // }
}
