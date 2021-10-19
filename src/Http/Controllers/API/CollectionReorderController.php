<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Matrix;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CollectionReorderController extends Controller
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
    public function __invoke(Request $request, $matrix)
    {
        $this->authorize('matrices.update');

        $matrix  = Matrix::find($matrix)->firstOrFail();
        $this->model = Builders\Matrix::resolve($matrix->handle);

        $this->walkCollection($request->collection);

        activity()
            ->performedOn($matrix)
            ->withProperties([
                'icon' => 'anchor',
                'entry' => 'matrix/'.$matrix->id.'/collection',
            ])
            ->log('Updated '.strtolower(Str::singular($matrix->name)).' entry ordering');
    }

    protected function walkCollection($collection, $parent = 0)
    {
        activity()->withoutLogs(function () use ($collection, $parent) {
            foreach ($collection as $order => $entry) {
                $record            = $this->model->find($entry['id']);
                $record->order     = $order;

                $record->save();
            }
        });
    }
}
