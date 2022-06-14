<?php

namespace Fusion\Fieldtypes;

use Fusion\Models\Field;

class DateTimeFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'Date/Time';

    /**
     * @var string
     */
    public $icon = 'calendar-alt';

    /**
     * @var string
     */
    public $description = 'Select a date with an optional time.';

    /**
     * @var string
     */
    public $cast = 'datetime';

    /**
     * @var array
     */
    public $settings = [
        'placeholder' => '',
        'format'      => 'Y-m-d',
        'time'        => false,
    ];

    /**
     * @var array
     */
    public $rules = [
        'settings.format' => 'required',
    ];

    /**
     * @var array
     */
    public $attributes = [
        'settings.format' => 'format',
    ];

    /**
     * @var array
     */
    public $column = [
        'type' => 'datetime',
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
            $validation = array_merge($validation, ['date_format:Y-m-d H:i:s']);
        }

        return [
            $field->handle => $validation,
        ];
    }

    /**
     * Returns resource object of field.
     *
     * @return JsonResource
     */
    public function getResource($model, Field $field)
    {
        return optional($this->getValue($model, $field))->toDateTimeString();
    }
}
