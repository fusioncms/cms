<?php

namespace Fusion\Listeners;

use Fusion\Mail\WelcomeNewUser;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class UserEventSubscriber
{
    /**
     * Handle 'user login' event.
     *
     * @param Illuminate\Auth\Events\Login  $event
     * @return void
     */
    public function handleUserLogin($event)
    {
        activity()
            ->performedOn($event->user)
            ->withProperties([
                'icon' => 'sign-in-alt',
                'link' => "users/{$event->user->id}/edit"
            ])
            ->log("Signed in ({$event->user->name})");
    }

    /**
     * Handle 'user registration' event.
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
     * Handle 'user password reset' event.
     * 
     * @param  \Illuminate\Auth\Events\PasswordReset  $event
     * @return void
     */
    public function handleUserPasswordReset($event)
    {
        
    }

    /**
     * Handle 'user verification' event.
     * 
     * @param  \Illuminate\Auth\Events\Verified  $event
     * @return void
     */
    public function handleUserVerification($event)
    {
        if (setting('users.user_email_welcome') === 'enabled') {
            Mail::to($event->user)
                ->send(new WelcomeNewUser($event->user));
        }
    }

    /**
     * Handle 'user validated' event.
     * 
     * @param  \Illuminate\Auth\Events\Validated  $event
     * @return void
     */
    public function handleUserValidated($event)
    {
        
    }

    /**
     * Handle 'user logout' event.
     *
     * @param Illuminate\Auth\Events\Logout  $event
     * @return void
     */
    public function handleUserLogout($event)
    {

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
            [UserEventSubscriber::class, 'handleUserPasswordReset']);

        $events->listen('Illuminate\Auth\Events\Verified',
            [UserEventSubscriber::class, 'handleUserVerification']);

        $events->listen('Illuminate\Auth\Events\Validated',
            [UserEventSubscriber::class, 'handleUserValidated']);
        
        $events->listen('Illuminate\Auth\Events\Logout',
            [UserEventSubscriber::class, 'handleUserLogout']);
    }
}