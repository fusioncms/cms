<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
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
        // Generate new password..
        $user->forceFill([
            'password' => Str::random(),
        ])->save();

        $user->sendPasswordResetNotification(
            Password::broker()->createToken($user)
        );

        return response()->json([], 202);
    }
}
