<?php

namespace Fusion\Http\Controllers\API\Menus;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\MenuRequest;
use Fusion\Http\Resources\MenuResource;
use Fusion\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Support\Collection
     */
    public function index(Request $request)
    {
        $this->authorize('menus.viewAny');

        $menus = Menu::orderBy('name')->paginate(25);

        return MenuResource::collection($menus);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Menu $menu
     *
     * @return \Fusion\Http\Responses\MenuResource
     */
    public function show(Menu $menu)
    {
        $this->authorize('menus.view');

        return new MenuResource($menu);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Fusion\Http\Requests\MenuRequest $request
     *
     * @return \Fusion\Http\Responses\MenuResource
     */
    public function store(MenuRequest $request)
    {
        $menu = Menu::create($request->validated());

        return new MenuResource($menu);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\MenuRequest $request
     * @param \Fusion\Models\Menu               $menu
     *
     * @return \Fusion\Http\Responses\MenuResource
     */
    public function update(MenuRequest $request, Menu $menu)
    {
        $menu->update($request->validated());

        return new MenuResource($menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Fusion\Models\Menu $menu
     *
     * @return void
     */
    public function destroy(Menu $menu)
    {
        $this->authorize('menus.delete');

        $menu->delete();
    }
}
