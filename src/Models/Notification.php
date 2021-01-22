<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Illuminate\Support\Facades\Notification as NotificationFacade;

class Notification extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'group', 'handle', 'namespace'];

    /**
     * Returns all Subscriptions for this model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function subscriptions()
	{
		return $this
			->belongsToMany(User::class, 'notifications_users')
			->using(Subscription::class);
	}

	/**
	 * Send Notification to Users with Subscription.
	 *
	 * @param  string $handle
	 * @return void
	 */
	public static function notifySubscribers($handle, ...$args)
	{
		$notification = static::where('handle', $handle)->firstOrFail();
		$subscribers  = $notification->subscriptions;

		NotificationFacade::send($subscribers, new $notification->namespace(...$args));
	}
}
