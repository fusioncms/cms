<?php

namespace Fusion\Concerns;

use Fusion\Mail\ForceSetPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;

trait PasswordCanExpire
{
    /**
     * Initialize the trait
     *
     * @return void
     */
    protected function initializePasswordCanExpire()
    {
        $this->dates[] = 'password_expires_at';
    }

    /**
     * Determine user's password has expired.
     *
     * @return bool
     */
    public function passwordHasExpired()
    {
        return ! is_null($this->password_expires_at) &&
               now() > $this->password_expires_at;
    }

    /**
     * Mark the given user's password as expired.
     *
     * @return bool
     */
    public function markPasswordAsExpired()
    {
        return $this->forceFill([
            'password_expires_at' => now(),
        ])->save();
    }

    /**
     * Mark the given user's password as unexpired.
     *
     * @return bool
     */
    public function setPasswordExpiration($expires = null)
    {
        return $this->forceFill([
            'password_expires_at' => $expires ?? now()->addYear(),
        ])->save();
    }

    /**
     * Mark the given user's password as unexpired.
     *
     * @return bool
     */
    public function removePasswordExpiration()
    {
        return $this->forceFill([
            'password_expires_at' => null,
        ])->save();
    }

    /**
     * Send the password set notification.
     *
     * @return void
     */
    public function sendPasswordExpiredNotification()
    {
        $this->markPasswordAsExpired();

        Mail::to($this)->send(new ForceSetPassword($this));
    }
}
