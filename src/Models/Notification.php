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
	 * @return void
	 */
	public function notifySubscribers()
	{
		NotificationFacade::send($this->subscriptions, new $this->namespace(...func_get_args()));
	}
}
