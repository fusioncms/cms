<?php

namespace Addons\Foobar\Http\Controllers\API;

use Illuminate\Http\Request;
use Addons\Foobar\Models\Foobar;
use Fusion\Http\Controllers\Controller;
use Addons\Foobar\Http\Requests\FoobarRequest;
use Addons\Foobar\Http\Resources\FoobarResource;

class FoobarController extends Controller
{
    /**
     * Display all resources.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $this->authorize('foobar.show');

        return FoobarResource::collection(
            Foobar::orderBy('name')->paginate(25)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request   $request
     * @param  \Addons\Foobar\Models\Foobar  $foobar
     * @return \Addons\Http\Responses\FoobarResource
     */
    public function show(Request $request, Foobar $foobar)
    {
        $this->authorize('foobar.show');

        return new FoobarResource($foobar);
    }

    /**
     * Store newly created record in storage.
     *
     * @param  \Addons\Foobar\Http\Requests\FoobarRequest  $request
     * @return \Addons\Http\Responses\FoobarResource
     */
    public function store(FoobarRequest $request)
    {
        $foobar = Foobar::create($request->validated());

        return new FoobarResource($foobar);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Addons\Foobar\Http\Requests\FoobarRequest  $request
     * @param  \Addons\Foobar\Models\Foobar                $foobar
     * @return \Addons\Http\Responses\FoobarResource
     */
    public function update(FoobarRequest $request, Foobar $foobar)
    {
        $foobar->update($request->validated());

        return new FoobarResource($foobar);
    }

    /**
     * Remove specified resource from storage.
     *
     * @param  \Illuminate\Http\Request   $request
     * @param  \Addons\Foobar\Models\Foobar  $foobar
     * @return void
     */
    public function destroy(Request $request, Foobar $foobar)
    {
        $this->authorize('foobar.delete');

        $foobar->delete();
    }
}
