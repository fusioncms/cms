<?php

namespace Fusion\Listeners;

use Fusion\Mail\WelcomeNewUser;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class UserEventSubscriber
{
    /**
     * Handle user login events.
     */
    public function handleUserLogin($event)
    {
        activity('sign-ins')
            ->withProperties(['icon' => 'sign-in-alt'])
            ->log('Signed in');
    }

    /**
     * Handle user registration events.
     * 
     * @param  \Illuminate\Auth\Events\Registered  $event
     * @return void
     */
    public function handleUserRegistration($event)
    {
        if ($event->user instanceof MustVerifyEmail && ! $event->user->hasVerifiedEmail()) {
            $event->user->sendEmailVerificationNotification();
        }
    }

    /**
     * Handle user password reset events.
     */
    public function handleUserPasswordReset($event)
    {
        
    }

    /**
     * Handle user logout events.
     */
    public function handleUserLogout($event)
    {

    }

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
     * @param  \Illuminate\Events\Dispatcher  $events
     * @return void
     */
    public function subscribe($events)
    {
        $events->listen('Illuminate\Auth\Events\Login',
            [UserEventSubscriber::class, 'handleUserLogin']);

        $events->listen('Illuminate\Auth\Events\Registered',
            [UserEventSubscriber::class, 'handleUserRegistration']);

        $events->listen('Illuminate\Auth\Events\PasswordReset',
            [UserEventSubscriber::class, 'handleUserRegistration']);

        $events->listen('Illuminate\Auth\Events\Verified',
            [UserEventSubscriber::class, 'handleUserVerification']);
        
        $events->listen('Illuminate\Auth\Events\Logout',
            [UserEventSubscriber::class, 'handleUserLogout']);
    }
}