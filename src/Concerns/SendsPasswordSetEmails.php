<?php

namespace Fusion\Concerns;

use Fusion\Models\User;
use Fusion\Mail\SetPassword;
use Illuminate\Support\Facades\Mail;

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
        Mail::to($user)->send(new SetPassword($user));
    }
}
