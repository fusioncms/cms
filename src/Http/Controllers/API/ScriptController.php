<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Resources\ScriptResource;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\ScriptRequest;
use Illuminate\Http\Request;
use Fusion\Models\Script;

class ScriptController extends Controller
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
        $this->authorize('scripts.viewAny');

        $scripts = Script::orderBy('name')->paginate(25);

        return ScriptResource::collection($scripts);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Script $script
     *
     * @return \Fusion\Http\Resources\ScriptResource
     */
    public function show(Script $script)
    {
        $this->authorize('scripts.view');

        return new ScriptResource($script);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Fusion\Http\Requests\ScriptRequest $request
     *
     * @return \Fusion\Http\Resources\ScriptResource
     */
    public function store(ScriptRequest $request)
    {
        $script = Script::create($request->validated());

        return new ScriptResource($script);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\ScriptRequest $request
     * @param \Fusion\Models\Script               $script
     *
     * @return \Fusion\Http\Resources\ScriptResource
     */
    public function update(ScriptRequest $request, Script $script)
    {
        $script->update($request->validated());

        return new ScriptResource($script);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Fusion\Models\Script $script
     *
     * @return void
     */
    public function destroy(Script $script)
    {
        $this->authorize('scripts.delete');

        $script->delete();
    }
}
