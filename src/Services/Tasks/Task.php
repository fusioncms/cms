<?php

namespace Fusion\Services\Tasks;

use Illuminate\Console\Scheduling\Schedule;

abstract class Task
{
	/**
	 * @var \Illuminate\Console\Scheduling\Schedule
	 */
	protected $schedule;

	/**
	 * Create new task.
	 * 
	 * @param \Illuminate\Console\Scheduling\Schedule $schedule
	 */
	public function __construct(Schedule $schedule)
	{
		$this->schedule = $schedule;

		$this->handle();
	}

	abstract public function handle();
}