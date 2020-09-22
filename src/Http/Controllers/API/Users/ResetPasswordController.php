<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Models\User;
use Fusion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    /**
     * Request for user to reset password.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\User       $user
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
            Password::broker()->createToken($user));
        
        return response()->json([], 202);
    }
}
