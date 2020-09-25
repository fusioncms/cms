<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\User;
use Illuminate\Http\Request;

class SetPasswordController extends Controller
{
    /**
     * Request for user to reset password.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\User      $user
     *
     * @return void
     */
    public function store(Request $request, User $user)
    {
        $this->authorize('users.update');

        $user->markPasswordAsExpired();

        return response()->json([], 202);
    }
}
