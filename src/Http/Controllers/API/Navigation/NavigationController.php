<?php

namespace Fusion\Http\Controllers\API\Navigation;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\Navigation\NavigationRequest;
use Fusion\Http\Resources\NavigationResource;
use Fusion\Models\Navigation;
use Illuminate\Http\Request;

class NavigationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     *
     * @return NavigationResource
     */
    public function index(Request $request)
    {
        $this->authorize('navigation.viewAny');

        $navigation = Navigation::orderBy('name')->paginate(25);

        return NavigationResource::collection($navigation);
    }

    /**
     * Display the specified resource.
     *
     * @param Navigation $navigation
     *
     * @return NavigationResource
     */
    public function show(Navigation $navigation)
    {
        $this->authorize('navigation.view');

        return new NavigationResource($navigation);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NavigationNodeRequest $request
     *
     * @return NavigationResource
     */
    public function store(NavigationRequest $request)
    {
        $navigation = Navigation::create($request->validated());

        return new NavigationResource($navigation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NavigationNodeRequest $request
     * @param Navigation            $navigation
     *
     * @return NavigationResource
     */
    public function update(NavigationRequest $request, Navigation $navigation)
    {
        $navigation->update($request->validated());

        return new NavigationResource($navigation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Navigation $navigation
     *
     * @return void
     */
    public function destroy(Navigation $navigation)
    {
        $this->authorize('navigation.delete');

        $navigation->delete();
    }
}
