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
        $menu  = $model->nodes->mapWithKeys(function ($node) {
            if ($node->status) {
                $item = [
                    'title'  => $node->name,
                    'to'     => $node->url,
                    'target' => $node->new_window ? '_blank' : '_self',
                ];

                foreach ($node->fields as $field) {
                    $item[$field->handle] = $node->{$field->handle} ?? null;
                }

                return [str_handle($node->name) => $item];
            }
        });

        return $menu;
    }
}
