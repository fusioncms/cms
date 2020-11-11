<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;

class LinkFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Link';

    /**
     * @var string
     */
    public $icon = 'link';

    /**
     * @var string
     */
    public $description = 'A group of fields to add a link or button, including the URL, display text, and target.';

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

    /**
     * @var array
     */
    public $validation = [
        'text'   => '',
        'link'   => '',
        'target' => '',
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
        return $field->validation->mapWithKeys(function ($rule, $key) use ($field) {
            return [
                "{$field->handle}.{$key}" => $rule ?: 'sometimes',
            ];
        });
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @param Field $field
     * @param mixed $value
     *
     * @return array
     */
    public function attributes(Field $field, $value = null)
    {
        return [
            "{$field->handle}.text"   => "{$field->name} Text",
            "{$field->handle}.link"   => "{$field->name} URL",
            "{$field->handle}.target" => "{$field->name} Target",
        ];
    }
}
