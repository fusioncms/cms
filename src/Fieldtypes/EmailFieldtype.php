<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;

class EmailFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Email';

    /**
     * @var string
     */
    public $icon = 'at';

    /**
     * @var string
     */
    public $description = 'E-mail input field.';

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
    public function rules(Field $field, $value = null)
    {
        $validation = parent::rules($field, $value);
        
        if ($field->validation->get('value')) {
            $validation = array_merge($validation, ['email']);
        }

        return [
            $field->handle => $validation,
        ];
    }
}
