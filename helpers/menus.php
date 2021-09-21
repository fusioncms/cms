<?php

use Fusion\Models\Navigation;

if (!function_exists('menu')) {
    /**
     * Fetch and register the given menu.
     *
     * @return string
     */
    function menu($handle)
    {
        $model = Navigation::where('handle', $handle)->firstOrFail();
        $menu  = $model->links->mapWithKeys(function ($link) {
            if ($link->status) {
                $item = [
                    'title'  => $link->name,
                    'to'     => $link->url,
                    'target' => $link->new_window ? '_blank' : '_self',
                ];

                foreach ($link->fields as $field) {
                    $item[$field->handle] = $link->{$field->handle} ?? null;
                }

                return [str_handle($link->name) => $item];
            }
        });

        return $menu;
    }
}
