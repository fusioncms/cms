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
			->belongsToMany(Channel::class, 'notifications_users')
			->using(Subscription::class);
	}

	/**
     * Returns all Notifications for this model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function notifications()
	{
		return $this
			->belongsToMany(Notification::class, 'notifications_users')
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
	 * Sync notification subscriptions for this model.
	 * 
	 * @param  array $subscriptions
	 * @return $this
	 */
	public function syncSubscriptions($subscriptions)
	{
		$existing = $this->subscriptions->pluck('id', 'id');

		// sync subscriptions
		collect($subscriptions)
			->each(function($sub) use ($existing) {
				$subscription = Subscription::updateOrCreate([
					'channel_id'      => $sub['channel_id'],
					'notification_id' => $sub['notification_id'],
					'user_id'         => $this->id,
				]);

				unset($existing[$subscription['id']]);
			});

		// remove unwanted subscriptions..
		foreach ($existing as $id) {
            Subscription::findOrFail($id)->delete();
        }

		return $this;
	}

	/**
	 * Assign the given subscription to the model.
	 * 
	 * @param  array $subscription
	 * 
	 * @return $this
	 */
	public function subscribeTo($subscription)
	{
		Subscription::firstOrCreate([
			'channel_id'      => $subscription['channel_id'],
			'notification_id' => $subscription['notification_id'],
			'user_id'         => $this->id,
		]);

		return $this;
	}

	/**
	 * Remove the given subscription to the model.
	 * 
	 * @param  array $subscription
	 * @return $this
	 */
	public function unsubscribeFrom($subscription)
	{
		Subscription::where([
			'channel_id'      => $subscription['channel_id'],
			'notification_id' => $subscription['notification_id'],
			'user_id'         => $this->id,
		])->firstOrFail()->delete();;

		return $this;
	}
}
