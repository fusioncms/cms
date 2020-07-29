<?php

namespace Fusion\Http\Controllers\API\Menus;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NodeRefreshController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $menu
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $menu)
    {
        $this->authorize('nodes.update');

        $menu = Menu::find($menu)->firstOrFail();

        $menu->nodes->each(function ($node, $index) {
            $node->order = $index + 1;
            $node->save();
        });

        activity()
            ->performedOn($menu)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'menus/'.$menu->id.'/nodes',
            ])
            ->log('Refreshed '.strtolower(Str::singular($menu->name)).' menu node ordering');
    }
}
