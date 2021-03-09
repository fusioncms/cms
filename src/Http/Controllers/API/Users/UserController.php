<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\UserRequest;
use Fusion\Http\Resources\UserResource;
use Fusion\Mail\ConfirmNewUser;
use Fusion\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

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
        $attributes['password'] = Hash::make($attributes['password'] ?? Str::random());

        $user = User::create($attributes)
            ->assignRole($attributes['role']);

        // handle role setting..
        $this->assureOwnerRoleLimit($user);

        // handle notification subscriptions..
        if (isset($attributes['subscriptions'])) {
            $user->syncSubscriptions($attributes['subscriptions']);
        }

        rescue(function() use ($user) {
            /**
             * Forces new users to confirm themselves.
             * @suppress any error messages
             *
             * Via:
             * - Verifying their e-mail address.
             * - Setting their own password.
             */
            Mail::to($user)
                ->send(new ConfirmNewUser($user));
        });

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
        $attributes  = $request->validated();

        // password (optional)..
        if ($request->isOwningUser() && isset($attributes['password'])) {
            $attributes['password'] = bcrypt($attributes['password']);

            $user->logPasswordChange();
        }

        $user->update($attributes);

        if (isset($attributes['role'])) {
            $user->syncRoles($attributes['role']);
        }

        // handle role setting..
        $this->assureOwnerRoleLimit($user);

        // handle notification subscriptions..
        if (isset($attributes['subscriptions'])) {
            $user->syncSubscriptions($attributes['subscriptions']);
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

        $user->delete();
    }

    /**
     * Assure only one `owner` exists.
     * [helper].
     *
     * @param \Fusion\Models\User $user
     *
     * @return void
     */
    private function assureOwnerRoleLimit(User $user)
    {
        if ($user->hasRole('owner')) {
            /**
             * Assure no other user has `owner` role.
             */
            User::role('owner')
                ->where('id', '<>', $user->id)
                ->each(function ($user) {
                    $user->removeRole('owner');
                    $user->assignRole('admin');
                });
        }
    }
}
