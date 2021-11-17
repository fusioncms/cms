<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Taxonomy;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TermReorderController extends Controller
{
    protected $model;

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $taxonomy
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $taxonomy)
    {
        $this->authorize('links.update');

        $taxonomy  = Taxonomy::find($taxonomy);
        $this->model = Builders\Taxonomy::resolve($taxonomy->handle);

        $this->walkTerms($request->records);
    }

    protected function walkTerms($terms, $parent = 0)
    {
        foreach ($terms as $order => $term) {
            $record            = $this->model->find($term['id']);
            $record->order     = $order;

            $record->save();
        }
    }
}
