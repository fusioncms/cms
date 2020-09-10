<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Facades\Menu;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\AdminNavigationResource;

class AdminNavigationController extends Controller
{
    /**
     * Get all admin navigation menu items.
     *
     * @return \Fusion\Http\Resources\AdminNavigationResource
     */
    public function index()
    {
        $this->authorize('access.controlPanel');

        // $roots = Menu::get('admin')->roots();
        // $links = $this->extractLinks($roots);

        return new AdminNavigationResource(Menu::get('admin'));
    }

    /**
     * Extract links and their children from menu collection.
     *
     * @param \Caffeinated\Menus\MenuItem $node
     *
     * @return \Illuminate\Support\Collection
     *
    protected function extractLinks($node)
    {
        $linkCollection = collect();

        foreach ($node as $item) {
            if ($item->hasChildren()) {
                $linkCollection->push([
                    'title'    => $item->title,
                    'to'       => '#',
                    'icon'     => $item->icon,
                    'children' => $this->extractLinks($item->children()),
                ]);
            } else {
                $linkCollection->push([
                    'title'    => $item->title,
                    'to'       => $item->to ?? '#',
                    'icon'     => $item->icon,
                    'divider'  => count($item->divider) ? true : false,
                ]);
            }
        }

        return $linkCollection;
    }*/
}
