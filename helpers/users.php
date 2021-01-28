<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;

/**
 * Retrieve the user model.
 *
 * @return mixed
 */
function user()
{
    return app()->make(Fusion\Models\User::class);
}

/**
 * Retrieve the role model.
 *
 * @return mixed
 */
function role()
{
    return app()->make(Fusion\Models\Role::class);
}

/**
 * Retrieve the permission model.
 *
 * @return mixed
 */
function permission()
{
    return app()->make(Fusion\Models\Permission::class);
}

if (!function_exists('notify')) {
    /**
     * Dispatch an event and call the listeners.
     *
     * @param string|object $event
     * @param mixed         $payload
     *
     * @return void
     */
    function notify(...$args)
    {
        rescue(function() use ($args) {
            $model  = app(Fusion\Models\Notification::class);
            $handle = array_shift($args);

            $notification = $model->where('handle', $handle)->firstOrFail();
            $subscribers  = $notification->subscriptions;

            Notification::send($subscribers, new $notification->namespace(...$args));
        });
    }
}
