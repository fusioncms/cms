<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Setting as Model;

class Setting extends Builder
{
    /**
     * New Builder instance.
     *
     * @param string $handle
     */
    public function __construct(string $handle)
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
        return ['setting_id'];
    }

    /**
     * Builder table prefix.
     * 
     * @var string
     */
    public static function prefix()
    {
        return 'settings';
    }
}