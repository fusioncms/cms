<?php

namespace Fusion\Concerns;

use Fusion\Models\{Channel,Notification,Subscription};
use Illuminate\Notifications\Notifiable as BaseNotifiable;

trait Notifiable
{
	use BaseNotifiable;

	/**
     * Returns all Channels for this model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function channels()
	{
		return $this
			->belongsToMany(Channel::class, 'channels_notifications_users')
			->using(Subscription::class);
	}

	/**
	 * Return all Subscriptions for this model.
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function subscriptions()
	{
		return $this->hasMany(Subscription::class);
	}

	/**
	 * Assign the given Subscription to the model.
	 * 
	 * @param  mixed $channel
	 * @param  mixed $notifications
	 * @return $this
	 */
	public function subscribeTo($channel, $notification)
	{
		Subscription::firstOrCreate([
			'channel_id'      => $this->getChannelId($channel),
			'notification_id' => $this->getNotificationId($notification),
			'user_id'         => $this->id,
		]);

		return $this;
	}

	/**
	 * Assign the given Subscription to the model.
	 * 
	 * @param  mixed $channel
	 * @param  mixed $notifications
	 * @return $this
	 */
	public function unsubscribeFrom($channel, $notification)
	{
		$this->getSubscription($channel, $notification)->delete();

		return $this;
	}

	/**
	 * Get specified Subscription from the model.
	 *
	 * @param  mixed $channel
	 * @param  mixed $notifications
	 * @return \Fusion\Models\Subscription
	 */
	public function getSubscription($channel, $notification)
	{
		return Subscription::where([
			'channel_id'      => $this->getChannelId($channel),
			'notification_id' => $this->getNotificationId($notification),
			'user_id'         => $this->id,
		])->first();
	}

	/**
	 * Determine if the model has the given subscription.
	 *
	 * @param  mixed $channel
	 * @param  mixed $notifications
	 * @return boolean
	 */
	public function hasSubscription($channel, $notification)
	{
		return !!$this->getSubscription($channel, $notification);
	}

	/**
	 * Get the corresponding Channel ID.
	 *
	 * @param  \Fusion\Models\Channel|string|integer $value
	 * @return integer
	 */
	private function getChannelId($value)
	{
		if ($value instanceof Channel) {
			return $value->id;
		}

		if (is_string($value)) {
			return Channel::where('handle', $value)->firstOrFail()->id;
		}

		return $value;
	}

	/**
	 * Get the corresponding Notification ID.
	 *
	 * @param  \Fusion\Models\Notification|string|integer $value
	 * @return integer
	 */
	private function getNotificationId($value)
	{
		if ($value instanceof Notification) {
			return $value->id;
		}

		if (is_string($value)) {
			return Notification::where('handle', $value)->firstOrFail()->id;
		}

		return $value;
	}
}
