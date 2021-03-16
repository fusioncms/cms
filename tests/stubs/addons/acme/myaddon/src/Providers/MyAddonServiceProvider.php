<?php

namespace Acme\Myaddon\Providers;

use Acme\Myaddon\Events\AcmeEvent;
use Acme\Myaddon\Listeners\AcmeHandler;
use Acme\Myaddon\Listeners\AcmeEventSubscriber;
use Fusion\Providers\AddonServiceProvider;

class MyAddonServiceProvider extends AddonServiceProvider
{
	/**
	 * Event Listeners.
	 * 
	 * @var array
	 */
	protected $listen = [
		AcmeEvent::class => AcmeHandler::class
	];

	/**
	 * Event Subscribers.
	 * 
	 * @var array
	 */
	protected $subscribe = [
		AcmeEventSubscriber::class
	];
}
