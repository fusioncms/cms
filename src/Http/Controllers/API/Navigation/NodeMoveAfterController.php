<?php

namespace Fusion\Http\Controllers\API\Navigation;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Navigation;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class NodeMoveAfterController extends Controller
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
        $model       = Builders\Navigation::resolve($navigation->handle);

        $move  = $model->find($request->move);
        $after = $model->find($request->after);

        $order = $after->orderAfter();

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
