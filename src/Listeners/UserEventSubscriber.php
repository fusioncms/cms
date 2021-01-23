<?php

namespace Fusion\Listeners;

use Fusion\Jobs\Onboard;
use Fusion\Models\{Notification,User};
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class UserEventSubscriber
{
    /**
     * Handle the user failed login event.
     *
     * @param \Illuminate\Auth\Events\Failed $event
     *
     * @return void
     */
    public function handleUserFailedLogin($event)
    {
        if ($user = User::where('email', $event->credentials['email'])->first()) {
            // Log the activity
            $event->user->logFailedLogin();
        }
    }

    /**
     * Handle the user login event.
     *
     * @param \Illuminate\Auth\Events\Login $event
     *
     * @return void
     */
    public function handleUserLogin($event)
    {
        // Log the activity
        $event->user->logSuccessfulLogin();

        // Clear any failed login attempts
        $event->user->clearFailedLoginAttempts();
    }

    /**
     * Handle the user registration event.
     *
     * @param \Illuminate\Auth\Events\Registered $event
     *
     * @return void
     */
    public function handleUserRegistration($event)
    {
        if ($event->user instanceof MustVerifyEmail) {

            // e-mail verification enabled..
            if ($event->user->shouldVerifyEmail()) {
                $event->user->sendEmailVerificationNotification();

            // e-mail verification disabled..
            } else {
                $event->user->markEmailAsVerified();

                event(new Verified($event->user));
            }
        } else {
            Onboard::dispatchNow($event->user);
        }

        notify('new_user_registration', $event->user);
    }

    /**
     * Handle 'user password reset' event.
     *
     * @param \Illuminate\Auth\Events\PasswordReset $event
     *
     * @return void
     */
    public function handleUserPasswordReset($event)
    {
        // Log the activity
        $event->user->logPasswordChange();

        // remove password expiration..
        $event->user->removePasswordExpiration();

        // auto-matically verify user email..
        if ($event->user instanceof MustVerifyEmail) {
            if ($event->user->shouldVerifyEmail() && !$event->user->hasVerifiedEmail()) {
                $event->user->markEmailAsVerified();

                event(new Verified($event->user));
            }
        }
    }

    /**
     * Handle 'user logout' event.
     *
     * @param Illuminate\Auth\Events\Logout $event
     *
     * @return void
     */
    public function handleUserLogout($event)
    {
        //
    }

    /**
     * Handle 'email verification' event.
     *
     * @param \Illuminate\Auth\Events\Verified $event
     *
     * @return void
     */
    public function handleUserVerification($event)
    {
        Onboard::dispatchNow($event->user);
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param \Illuminate\Events\Dispatcher $events
     *
     * @return void
     */
    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Failed',
            [UserEventSubscriber::class, 'handleUserFailedLogin']
        );

        $events->listen(
            'Illuminate\Auth\Events\Login',
            [UserEventSubscriber::class, 'handleUserLogin']
        );

        $events->listen(
            'Illuminate\Auth\Events\Registered',
            [UserEventSubscriber::class, 'handleUserRegistration']
        );

        $events->listen(
            'Illuminate\Auth\Events\PasswordReset',
            [UserEventSubscriber::class, 'handleUserPasswordReset']
        );

        $events->listen(
            'Illuminate\Auth\Events\Verified',
            [UserEventSubscriber::class, 'handleUserVerification']
        );

        $events->listen(
            'Illuminate\Auth\Events\Logout',
            [UserEventSubscriber::class, 'handleUserLogout']
        );
    }
}
