<?php

namespace Fusion\Http\Controllers\API\Navigation;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Navigation;
use Fusion\Services\Builders\Navigation as Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NodeMoveBeforeController extends Controller
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

        $navigation  = Navigation::find($navigation)->firstOrFail();
        $model       = (new Builder($navigation->handle))->make();

        $move   = $model->find($request->move);
        $before = $model->find($request->before);

        $order = $before->orderBefore();

        $move->order = $order;
        $move->save();

        activity()
            ->performedOn($navigation)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'navigation/'.$navigation->id.'/nodes',
            ])
            ->log('Updated '.strtolower(Str::singular($navigation->name)).' navigation node ordering');
    }
}
