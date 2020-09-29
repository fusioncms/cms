<?php

namespace Fusion\Listeners;

use Fusion\Events\UserWelcomed;
use Fusion\Mail\WelcomeNewUser;
use Fusion\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Mail;

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
            event(new UserWelcomed($event->user));
        }
    }

    /**
     * Handle 'user welcome' event.
     *
     * @param \Fusion\Events\UserWelcomed $event
     *
     * @return void
     */
    public function handleUserWelcome($event)
    {
        if (is_null($event->user->welcomed_at)) {
            $event->user->forceFill(['welcomed_at' => now()])->save();

            if (setting('users.user_email_welcome') === 'enabled') {
                Mail::to($event->user)
                    ->send(new WelcomeNewUser($event->user));
            }
        }
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
        event(new UserWelcomed($event->user));
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
            'Fusion\Events\UserWelcomed',
            [UserEventSubscriber::class, 'handleUserWelcome']
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
