<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;
use Fusion\Rules\SecurePassword;

class PasswordFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Password';

    /**
     * @var string
     */
    public $icon = 'lock';

    /**
     * @var string
     */
    public $description = 'Password input field.';

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
        $validation = explode('|', $field->validation ?: 'sometimes');

        array_push($validation, new SecurePassword());

        return [
            $field->handle => $validation,
        ];
    }
}
