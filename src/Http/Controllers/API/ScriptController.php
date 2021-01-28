<?php

namespace Fusion\Http\Controllers\API\Users;

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
     * @param \Fusion\Models\Script $role
     *
     * @return \Fusion\Http\Resources\ScriptResource
     */
    public function show(Script $role)
    {
        $this->authorize('scripts.view');

        return new ScriptResource($role);
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
        $role = Script::create($request->validated());

        if ($request->has('permissions')) {
            $role->givePermissionTo($request->input('permissions'));
        }

        return new ScriptResource($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\ScriptRequest $request
     * @param \Fusion\Models\Script               $role
     *
     * @return \Fusion\Http\Resources\ScriptResource
     */
    public function update(ScriptRequest $request, Script $role)
    {
        $role->update($request->validated());

        if ($request->has('permissions')) {
            $role->syncPermissions($request->input('permissions'));
        }

        return new ScriptResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Fusion\Models\Script $role
     *
     * @return void
     */
    public function destroy(ScriptRequest $request, Script $role)
    {
        if (!$request->has('transfer')) {
            return response()->json([
                'error' => 'Script transfer not specified.',
            ], 400);
        }

        $role->users->each(function ($user) use ($request) {
            $user->syncScripts($request->get('transfer'));
        });

        $role->delete();
    }
}
