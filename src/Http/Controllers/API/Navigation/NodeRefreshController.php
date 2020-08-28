<?php

namespace Fusion\Http\Controllers\API\Navigation;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Navigation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NodeRefreshController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $navigation
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $navigation)
    {
        $this->authorize('nodes.update');

        $navigation = Navigation::find($navigation)->firstOrFail();

        $navigation->nodes->each(function ($node, $index) {
            $node->order = $index + 1;
            $node->save();
        });

        activity()
            ->performedOn($navigation)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'navigation/'.$navigation->id.'/nodes',
            ])
            ->log('Refreshed '.strtolower(Str::singular($navigation->name)).' navigation node ordering');
    }
}
