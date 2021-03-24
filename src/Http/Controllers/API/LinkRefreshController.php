<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Navigation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LinkRefreshController extends Controller
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
        $this->authorize('links.update');

        $navigation = Navigation::find($navigation)->firstOrFail();

        $navigation->links->each(function ($node, $index) {
            $node->order = $index + 1;
            $node->save();
        });

        activity()
            ->performedOn($navigation)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'navigation/'.$navigation->id.'/links',
            ])
            ->log('Refreshed '.strtolower(Str::singular($navigation->name)).' link ordering');
    }
}
