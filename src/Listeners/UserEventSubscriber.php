<?php

namespace Fusion\Listeners;

use Fusion\Mail\WelcomeNewUser;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Mail;

class UserEventSubscriber
{
    /**
     * Handle the user failed login event.
     */
    public function handleUserFailedLogin($event)
    {
        // Log the activity
        $event->user->logFailedLogin();
    }

    /**
     * Handle the user login event.
     */
    public function handleUserLogin($event)
    {
        // Log the activity
        auth()->user()->logSuccessfulLogin();

        // Clear any failed login attempts
        auth()->user()->clearFailedLoginAttempts();
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
        if ($event->user instanceof MustVerifyEmail && !$event->user->hasVerifiedEmail()) {
            $event->user->sendEmailVerificationNotification();
        }
    }

    /**
     * Handle the user password reset event.
     */
    public function handleUserPasswordReset($event)
    {
        // Log the activity
        $event->user->logPasswordChange();
    }

    /**
     * Handle the user logout event.
     */
    public function handleUserLogout($event)
    {
        //
    }

    /**
     * Handle the user verification event.
     */
    public function handleUserVerification($event)
    {
        if (setting('users.user_email_welcome') === 'enabled') {
            Mail::to($verified->user)
                ->send(new WelcomeNewUser($verified->user));
        }
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
