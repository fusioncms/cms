<?php

namespace Fusion\Http\Controllers\API\Users;

use Fusion\Models\User;
use Fusion\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class VerifyEmailController extends Controller
{
    /**
     * Request for user to verify e-mail.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\User       $user
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, User $user)
    {
        if ($user instanceof MustVerifyEmail) {
            $user->markEmailAsUnverified();
            $user->sendEmailVerificationNotification();
        }

        return response()->json([], 202);
    }
}
