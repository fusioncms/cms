<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Navigation;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LinkMoveBeforeController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\Navigation $navigation
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, Navigation $navigation)
    {
        $this->authorize('links.update');

        $model = Builders\Navigation::resolve($navigation->handle);

        $move   = $model->find(intval($request->move));
        $before = $model->find(intval($request->before));

        $order = $before->orderBefore();

        $move->order = $order;
        $move->save();

        activity()
            ->performedOn($navigation)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'navigation/'.$navigation->id.'/links',
            ])
            ->log('Updated '.strtolower(Str::singular($navigation->name)).' link ordering');
    }
}
