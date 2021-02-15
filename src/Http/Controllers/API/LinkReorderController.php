<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Navigation;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LinkReorderController extends Controller
{
    protected $model;

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

        $navigation  = Navigation::find($navigation)->firstOrFail();
        $this->model = Builders\Navigation::resolve($navigation->handle);

        $this->walkLinks($request->links);

        activity()
            ->performedOn($navigation)
            ->withProperties([
                'icon' => 'anchor',
                'link' => 'navigation/'.$navigation->id.'/links',
            ])
            ->log('Updated '.strtolower(Str::singular($navigation->name)).' link ordering');
    }

    protected function walkLinks($links, $parent = 0)
    {
        activity()->withoutLogs(function () use ($links, $parent) {
            foreach ($links as $order => $link) {
                $record            = $this->model->find($link['id']);
                $record->order     = $order;
                $record->parent_id = $parent;

                if ($link['children']) {
                    $this->walkLinks($link['children'], $link['id']);
                }

                $record->save();
            }
        });
    }
}
