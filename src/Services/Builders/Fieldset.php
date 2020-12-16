<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Fieldset as Model;

class Fieldset extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct($handle)
    {
        $this->source = Model::where('handle', $handle)->firstOrFail();
    }

    /**
     * Mass assignment protection.
     * 
     * @var array
     */
    protected function getFillable()
    {
        return ['field_id', 'fieldset_id', 'name', 'handle', 'status'];
    }

    /**
     * Attribute casting.
     * 
     * @var array
     */
    protected function getCasts()
    {
        return [
            'status' => 'boolean'
        ];
    }

    /**
     * Builder table prefix.
     * 
     * @var string
     */
    public static function prefix()
    {
        return 'fx';
    }
}
