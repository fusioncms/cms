<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;

class AddressFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Address';

    /**
     * @var string
     */
    public $icon = 'map-marked-alt';

    /**
     * @var string
     */
    public $description = 'A group of fields to input an address with Google Maps integration';

    /**
     * @var string
     */
    public $cast = 'collection';

    /**
     * @var array
     */
    public $settings = [
        'api_key' => '',
    ];

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
        'address1' => '',
        'address2' => '',
        'city'     => '',
        'state'    => '',
        'zip'      => '',
        'country'  => '',
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
            "{$field->handle}.address1" => "{$field->name} Address 1",
            "{$field->handle}.address2" => "{$field->name} Address 2",
            "{$field->handle}.city"     => "{$field->name} City",
            "{$field->handle}.state"    => "{$field->name} State",
            "{$field->handle}.zip"      => "{$field->name} Zip",
            "{$field->handle}.country"  => "{$field->name} Country",
        ];
    }
}
