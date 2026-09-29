<?php

namespace Fusion\Fieldtypes;

class ListFieldtype extends Fieldtype
{
    /**
     * @var string
     */
    public $name = 'List';

    /**
     * @var string
     */
    public $icon = 'list';

    /**
     * @var string
     */
    public $description = 'A simple list of values.';

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
    public $validation = [];  // no validation

    /**
     * Returns value of field in the format expected by
     * the config value a setting overrides.
     *
     * List items are saved as `{ _id, value }` pairs,
     * config expects a plain list of values.
     *
     * @param mixed $value
     *
     * @return array
     */
    public function getConfigValue($value)
    {
        return collect($value)
            ->map(function ($item) {
                return is_array($item) ? ($item['value'] ?? null) : $item;
            })
            ->values()
            ->all();
    }
}
