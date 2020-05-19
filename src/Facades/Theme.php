<?php

namespace Fusion\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Fusion\Services\Theme
 */
class Theme extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
    	return 'theme';
    }
}