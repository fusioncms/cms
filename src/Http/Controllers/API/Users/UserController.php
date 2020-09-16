<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Events\UserDeleted;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\UserRequest;
use Fusion\Http\Resources\UserResource;
use Fusion\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Return a paginated resource of all users.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Support\Collection
     */
    public function index(Request $request)
    {
        $this->authorize('users.viewAny');

        $users = User::paginate(25);

        return UserResource::collection($users);
    }

    /**
     * Return the specific user.
     *
     * @param \Fusion\Models\User $user
     *
     * @return \Fusion\Http\Resources\UserResource
     */
    public function show(User $user)
    {
        $this->authorize('users.view');

        return new UserResource($user);
    }

    /**
     * Store a new user.
     *
     * @param \Fusion\Http\Requests\UserRequest $request
     *
     * @return \Fusion\Http\Resources\UserResource
     */
    public function store(UserRequest $request)
    {
        $attributes             = $request->validated();
        $attributes['password'] = bcrypt($attributes['password']);

        $user = User::create($attributes);

        // role assignment..
        if (isset($attributes['role'])) {
            if ($attributes['role'] === 'owner') {
                User::role('owner')
                    ->where('id', '<>', $user->id)
                    ->each(function ($user) {
                        $user->syncRoles('admin');
                    });
            }

            $user->assignRole($attributes['role']);
        }

        return new UserResource($user);
    }

    /**
     * Update an existing user.
     *
     * @param \Fusion\Http\Requests\UserRequest $request
     * @param \Fusion\Models\User               $user
     *
     * @return \Fusion\Http\Resources\UserResource
     */
    public function update(UserRequest $request, User $user)
    {
        $attributes = $request->validated();

        // password (optional)..
        if (isset($attributes['password'])) {
            $attributes['password'] = bcrypt($attributes['password']);
            $user->logPasswordChange();
        }

        $user->update($attributes);

        // role assignment..
        if (isset($attributes['role'])) {
            if ($attributes['role'] === 'owner') {
                User::role('owner')
                    ->where('id', '<>', $user->id)
                    ->each(function ($user) {
                        $user->syncRoles('admin');
                    });
            }

            $user->syncRoles($attributes['role']);
        }

        return new UserResource($user);
    }

    /**
     * Destroy an existing user.
     *
     * @param \Fusion\Models\User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $this->authorize('users.delete');

        event(new UserDeleted($user));

        $user->delete();
    }
}
