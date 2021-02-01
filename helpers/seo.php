<?php

if (!function_exists('seo')) {
    /**
     * Fetch an instance of SEO.
     */
    function seo()
    {
        return app('seo.seo');
    }
}

if (!function_exists('render_scripts')) {
    function render_scripts($location)
    {
        $scripts = \Fusion\Models\Script::select('code')
            ->where('location', $location)
            ->where('status', true)
            ->get()
            ->implode('code', "\n");

        echo $scripts;
    }
}