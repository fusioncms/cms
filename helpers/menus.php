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
        $items = $model->nodes->mapWithKeys(function($node) {
            if ($node->status) {
                $item = [
                    'title'  => $node->name,
                    'to'     => $node->url,
                    'target' => $node->new_window ? '_blank' : '_self',
                ];

                if ($node->menu && $node->menu->fieldset) {
                    foreach ($node->menu->fieldset->fields as $field) {
                        $item->{$field->handle} = $node->{$field->handle};
                    }
                }

                return [
                    str_handle($node->name) => $item
                ];
            }
        });

        return $items;
    }
}
