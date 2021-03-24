<?php

namespace Fusion\Concerns;

use Illuminate\Auth\Notifications\VerifyEmail;
use Throwable;

trait MustVerifyEmail
{
    /**
     * Determine if the user has verified their email address.
     *
     * @return bool
     */
    public function getVerifiedAttribute()
    {
        return $this->hasVerifiedEmail();
    }

    /**
     * Determine if the user has verified their email address.
     *
     * @return bool
     */
    public function hasVerifiedEmail()
    {
        if ($this->shouldVerifyEmail()) {
            return !is_null($this->email_verified_at);
        }

        return true;
    }

    /**
     * Mark the given user's email as verified.
     *
     * @return bool
     */
    public function markEmailAsVerified()
    {
        return $this->forceFill([
            'email_verified_at' => $this->freshTimestamp(),
        ])->save();
    }

    /**
     * Mark the given user's email as unverified.
     *
     * @return bool
     */
    public function markEmailAsUnverified()
    {
        return $this->forceFill([
            'email_verified_at' => null,
        ])->save();
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        if ($this->shouldVerifyEmail()) {
            rescue(function() {
                $this->notify(new VerifyEmail());
            }, function(Throwable $exception) {
                logger()->error("Unable to send email verification: `{$exception->getMessage()}`");
            });
        }
    }

    /**
     * Get the email address that should be used for verification.
     *
     * @return string
     */
    public function getEmailForVerification()
    {
        return $this->email;
    }

    /**
     * Determines if email verification is enabled.
     *
     * @return bool
     */
    public function shouldVerifyEmail()
    {
        return setting('users.user_email_verification') === 'enabled';
    }
}
