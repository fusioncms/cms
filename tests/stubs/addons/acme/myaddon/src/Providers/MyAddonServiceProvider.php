<?php

namespace Acme\Myaddon\Providers;

use Acme\Myaddon\Console\AcmeCommand;
use Acme\Myaddon\Events\AcmeEvent;
use Acme\Myaddon\Listeners\AcmeHandler;
use Acme\Myaddon\Listeners\AcmeEventSubscriber;
use Fusion\Providers\AddonServiceProvider;

class MyAddonServiceProvider extends AddonServiceProvider
{
	/**
	 * Event listeners.
	 * 
	 * @var array
	 */
	protected $listen = [
		AcmeEvent::class => AcmeHandler::class
	];

	/**
	 * Event subscribers.
	 * 
	 * @var array
	 */
	protected $subscribe = [
		AcmeEventSubscriber::class
	];

	/**
	 * Artisan commands.
	 * 
	 * @var array
	 */
	protected $commands = [
		AcmeCommand::class,
	];
}
