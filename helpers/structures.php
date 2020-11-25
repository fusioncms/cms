<?php

if (!function_exists('structures')) {
    /**
     * Returns the structure registry instance from the container.
     *
     * @return \Fusion\Structures\Registry
     */
    function structures()
    {
        return app()->make(Fusion\Structures\Registry::class);
    }
}

