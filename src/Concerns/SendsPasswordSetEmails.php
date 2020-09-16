<?php

namespace Fusion\Concerns;

use Fusion\Models\User;
use Fusion\Mail\SetPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;

trait SendsPasswordSetEmails
{
    /**
     * Send the password set notification.
     *
     * @param  string  $token
     * @return void
     */
    protected function sendPasswordSetNotification(User $user)
    {
        $token = Password::broker()->createToken($user);

        Mail::to($user)->send(new SetPassword($user, $token));
    }
}
