<?php

namespace Fusion\Http\Controllers\API;

use Illuminate\Http\Request;
use Fusion\Services\Builders;
use Fusion\Models\Navigation;
use Fusion\Http\Requests\LinkRequest;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\LinkResource;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Navigation $navigation
     *
     * @return NavigationResource
     */
    public function index(Navigation $navigation)
    {
        $this->authorize('links.viewAny');

        $links = Builders\Navigation::resolve($navigation->handle);

        return LinkResource::collection($links->paginate(25));
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Navigation $navigation
     * @param
     *
     * @return LinkResource
     */
    public function show(Navigation $navigation, $id)
    {
        $this->authorize('links.view');

        $link = Builders\Navigation::resolve($navigation->handle);

        return new LinkResource($link->find($id));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param LinkRequest  $request
     * @param Navigation   $navigation
     *
     * @return LinkResource
     */
    public function store(LinkRequest $request, Navigation $navigation)
    {
        $link = $request->model->create($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($link, $relationship);
        }

        return new LinkResource($link);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param LinkRequest $request
     * @param Navigation            $navigation
     * @param int                   $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(LinkRequest $request, Navigation $navigation, $id)
    {
        $link = $request->model->findOrFail($id);
        $link->update($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($link, $relationship);
        }

        return new LinkResource($link);
    }

    /**
     * Destroy resource from storage.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\Navigation $taxonomy
     * @param int                       $id
     *
     * @return void
     */
    public function destroy(Request $request, Navigation $navigation, $id)
    {
        $this->authorize('links.delete');

        $link = Builders\Navigation::resolve($navigation->handle);

        $link->findOrFail($id)->delete();
    }
}
