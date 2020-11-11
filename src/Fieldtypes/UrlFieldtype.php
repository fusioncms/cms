<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;

class UrlFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'URL';

    /**
     * @var string
     */
    public $icon = 'external-link-alt';

    /**
     * @var string
     */
    public $description = 'URL input field.';

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
        $validation = explode('|', $field->validation->get('value') ?: 'sometimes');
        $validation = array_merge($validation, ['url']);

        return [
            $field->handle => $validation,
        ];
    }
}
