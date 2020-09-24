<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\BlueprintRequest;
use Fusion\Http\Resources\BlueprintResource;
use Fusion\Models\Blueprint;

class BlueprintController extends Controller
{
    public function index()
    {
        $this->authorize('blueprints.show');

        $blueprints = Blueprint::orderBy('name')->get();

        return BlueprintResource::collection($blueprints);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Blueprint $blueprint
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Blueprint $blueprint)
    {
        $this->authorize('blueprints.show');

        return new BlueprintResource($blueprint);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\BlueprintRequest $request
     * @param \Fusion\Models\Blueprint               $blueprint
     *
     * @return \Fusion\Http\Resources\BlueprintResource
     */
    public function update(BlueprintRequest $request, Blueprint $blueprint)
    {
        $blueprint->update($request->validated());

        return new BlueprintResource($blueprint);
    }
}
