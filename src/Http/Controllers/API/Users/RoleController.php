<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\RoleRequest;
use Fusion\Http\Resources\RoleResource;
use Fusion\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
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
        $this->authorize('roles.viewAny');

        $roles = Role::orderBy('name')->paginate(25);

        return RoleResource::collection($roles);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Role $role
     *
     * @return \Fusion\Http\Resources\RoleResource
     */
    public function show(Role $role)
    {
        $this->authorize('roles.view');

        return new RoleResource($role);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Fusion\Http\Requests\RoleRequest $request
     *
     * @return \Fusion\Http\Resources\RoleResource
     */
    public function store(RoleRequest $request)
    {
        $role = Role::create($request->validated());

        if ($request->has('permissions')) {
            $role->givePermissionTo($request->input('permissions'));
        }

        return new RoleResource($role);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\RoleRequest $request
     * @param \Fusion\Models\Role               $role
     *
     * @return \Fusion\Http\Resources\RoleResource
     */
    public function update(RoleRequest $request, Role $role)
    {
        $role->update($request->validated());

        if ($request->has('permissions')) {
            $role->syncPermissions($request->input('permissions'));
        }

        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \Fusion\Models\Role $role
     *
     * @return void
     */
    public function destroy(RoleRequest $request, Role $role)
    {
        if (!$request->has('transfer')) {
            return response()->json([
                'error' => 'Role transfer not specified.',
            ], 400);
        }

        $role->users->each(function ($user) use ($request) {
            $user->syncRoles($request->get('transfer'));
        });

        $role->delete();
    }
}
