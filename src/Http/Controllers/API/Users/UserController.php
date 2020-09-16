<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Concerns\SendsPasswordSetEmails;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\UserRequest;
use Fusion\Http\Resources\UserResource;
use Fusion\Models\User;
use Fusion\Events\Users\NewBackendUser;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UserController extends Controller
{
    use SendsPasswordSetEmails;

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
        $attributes['password'] = bcrypt($attributes['password'] ?? Str::random());

        $user = User::create($attributes);

        // handle role setting..
        $this->assureOwnerRoleLimit($user);

        // Note: suppression req'd during imports..
        $this->sendPasswordSetNotification($user);

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
        }

        $user->update($attributes);

        // handle role setting..
        $this->assureOwnerRoleLimit($user);

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

        $user->delete();
    }

    /**
     * Assure only one `owner` exists.
     * [helper]
     *   
     * @return void
     */
    private function assureOwnerRoleLimit(User $user)
    {
        if ($role = request()->input('role')) {
            if ($role === 'owner') {
                User::role('owner')
                    ->where('id', '<>', $user->id)
                    ->each(function ($user) {
                        $user->syncRoles('admin');
                    });
            }

            $user->assignRole($role);
        }
    }
}
