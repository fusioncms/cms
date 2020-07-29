<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\TermRequest;
use Fusion\Http\Resources\TermResource;
use Fusion\Models\Taxonomy;
use Fusion\Services\Builders\Taxonomy as Builder;
use Illuminate\Http\Request;

class TermController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Taxonomy $taxonomy
     *
     * @return \Fusion\Http\Resources\TermResource
     */
    public function index(Taxonomy $taxonomy)
    {
        $this->authorize('terms.viewAny');

        return TermResource::collection(
            (new Builder($taxonomy->handle))->get()->paginate(25)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Taxonomy $taxonomy
     * @param int                     $id
     *
     * @return \Fusion\Http\Resources\TermResource
     */
    public function show(Taxonomy $taxonomy, $id)
    {
        $this->authorize('terms.view');

        return new TermResource(
            (new Builder($taxonomy->handle))->get()->findOrFail($id)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Http\Requests\TermRequest $request
     * @param \Fusion\Models\Taxonomy           $taxonomy
     *
     * @return \Fusion\Http\Resources\TermResource
     */
    public function store(TermRequest $request, Taxonomy $taxonomy)
    {
        $term = $request->model->create($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($term, $relationship);
        }

        return new TermResource($term);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\TermRequest $request
     * @param \Fusion\Models\Taxonomy           $taxonomy
     * @param int                               $id
     *
     * @return \Fusion\Http\Resources\TermResource
     */
    public function update(TermRequest $request, Taxonomy $taxonomy, $id)
    {
        $term = $request->model->findOrFail($id);
        $term->update($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($term, $relationship);
        }

        return new TermResource($term);
    }

    /**
     * Destroy resource from storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\Taxonomy  $taxonomy
     * @param int                      $id
     *
     * @return void
     */
    public function destroy(Request $request, Taxonomy $taxonomy, $id)
    {
        $this->authorize('terms.delete');

        $model = (new Builder($taxonomy->handle))->make();
        $term = $model->findOrFail($id);

        $term->delete();
    }
}
