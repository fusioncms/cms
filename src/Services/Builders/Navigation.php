<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Navigation as Model;

class Navigation extends Builder
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
        return ['navigation_id', 'name', 'url', 'new_window', 'order', 'status'];
    }

    /**
     * Return builder folder name.
     * 
     * @return string
     */
    protected function getBuildFolder()
    {
        return 'Navigation';
    }

    /**
     * Attribute casting.
     * 
     * @var array
     */
    protected function getCasts()
    {
        return [
            'order'      => 'integer',
	        'new_window' => 'boolean',
	        'status'     => 'boolean',
        ];
    }

    /**
     * Builder table prefix.
     * 
     * @var string
     */
    public static function prefix()
    {
        return 'navigation';
    }
}
