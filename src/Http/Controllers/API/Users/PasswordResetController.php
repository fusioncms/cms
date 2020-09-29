<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;

class PasswordResetController extends Controller
{
    /**
     * Request for `reset password` request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\User      $user
     *
     * @return void
     */
    public function store(Request $request, User $user)
    {
        $this->authorize('users.update');

        $user->sendPasswordResetNotification(
            Password::broker()->createToken($user));

        return response()->json([], 202);
    }
}
