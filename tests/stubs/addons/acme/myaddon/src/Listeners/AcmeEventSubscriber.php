<?php

namespace Acme\Myaddon\Listeners;

class AcmeEventSubscriber
{
	/**
	 * @param \Acme\Myaddon\Events\AcmeSubscription $event
	 *
	 * @return void
	 */
	public function handleAcmeEvent($event)
	{
		//
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
            'Acme\Myaddon\Events\AcmeSubscription',
            [AcmeEventSubscriber::class, 'handleAcmeSubscription']
        );
    }
}