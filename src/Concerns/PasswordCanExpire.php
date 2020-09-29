<?php

namespace Fusion\Concerns;

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
     * Determines if passwords can expire.
     *
     * @return bool
     */
    public function passwordCanExpire()
    {
        return ! setting('users.user_password_expiration');
    }
}
