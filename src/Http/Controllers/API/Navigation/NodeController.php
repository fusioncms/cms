<?php

namespace Fusion\Http\Controllers\API\Navigation;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NodeResource;
use Fusion\Http\Requests\Navigation\NavigationNodeRequest;
use Fusion\Models\Navigation;
use Fusion\Services\Builders;
use Illuminate\Http\Request;

class NodeController extends Controller
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
        $this->authorize('nodes.viewAny');

        $nodes = Builders\Navigation::resolve($navigation->handle);

        return NodeResource::collection($nodes->paginate(25));
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Navigation $navigation
     * @param 
     *
     * @return NodeResource
     */
    public function show(Navigation $navigation, $id)
    {
        $this->authorize('nodes.view');

        $node = Builders\Navigation::resolve($navigation->handle);

        return new NodeResource($node->find($id));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NavigationNodeRequest $request
     * @param Navigation $navigation
     *
     * @return NodeResource
     */
    public function store(NavigationNodeRequest $request, Navigation $navigation)
    {
        $node = $request->model->create($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($node, $relationship);
        }

        return new NodeResource($node);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NavigationNodeRequest $request
     * @param Navigation            $navigation
     * @param int                   $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(NavigationNodeRequest $request, Navigation $navigation, $id)
    {
        $node = $request->model->findOrFail($id);
        $node->update($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($node, $relationship);
        }

        return new NodeResource($node);
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
        $this->authorize('nodes.delete');

        $node = Builders\Navigation::resolve($navigation->handle);

        $node->findOrFail($id)->delete();
    }
}
