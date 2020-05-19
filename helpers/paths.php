<?php

if (! function_exists('fusion_path')) {
    /**
     * Get the path to the fusion folder.
     *
     * @param  string  $path
     * @return string
     */
    function fusion_path($path = '')
    {
        return realpath(__DIR__ . '/../') . ($path ? DIRECTORY_SEPARATOR.ltrim($path, DIRECTORY_SEPARATOR) : $path);
    }
}

if (! function_exists('theme_path')) {
    /**
     * Get the path to the themes folder.
     *
     * @param  string  $path
     * @return string
     */
    function theme_path($path = '')
    {
        return base_path().DIRECTORY_SEPARATOR.'themes'.($path ? DIRECTORY_SEPARATOR.ltrim($path, DIRECTORY_SEPARATOR) : $path);
    }
}