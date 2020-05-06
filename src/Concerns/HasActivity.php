<?php

namespace Fusion\Concerns;

use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\LogsActivity;

trait HasActivity
{
	use LogsActivity;

	/**
	 * Limit event logging to..
	 * 
	 * @var array
	 */
	protected static $recordEvents = ['created', 'updated'];

	/**
	 * Clean up on `deleted` event.
	 * 
	 * @return void
	 */
	protected static function bootHasActivity()
	{
		static::deleted(function ($model) {
			Activity::where([
				'subject_id'   => $model->id,
				'subject_type' => get_class($model)
			])->get()->each(function($record) {
				$record->delete();
			});
		});
	}
}