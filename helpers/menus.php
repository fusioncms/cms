<?php

use Fusion\Models\Menu as MenuModel;

if (!function_exists('menu')) {
    /**
     * Fetch and register the given menu.
     *
     * @return string
     */
    function menu($handle)
    {
        $menu  = Menu::make($handle, function () {});
        $model = MenuModel::where('handle', $handle)->first();

        $add = function ($node, $parent = null) use ($menu) {
            $item = $menu->add($node->name, $node->url);

            if ($node->new_window) {
                $item->target = '_blank';
            } else {
                $item->target = '_self';
            }

            $blueprint = $node->menu->blueprint;

            foreach ($blueprint->fields as $field) {
                $item->{$field->handle} = $node->{$field->handle};
            }
        };

        if ($model) {
            foreach ($model->nodes as $node) {
                if ($node->status) {
                    $add($node);
                }
            }
        }

        return $menu;
    }
}
