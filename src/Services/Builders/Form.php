<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Form as Model;

class Form extends Builder
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
        return ['form_id', 'identifiable_ip_address'];
    }

    /**
     * Builder table prefix.
     *
     * @var string
     */
    public static function prefix()
    {
        return 'form';
    }
}
