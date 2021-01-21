<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Subscription extends Pivot
{
	/**
      * The table associated with the model.
      *
      * @var string
      */
	protected $table = 'notifications_users';

	/**
      * Indicates if the model should be timestamped.
      *
      * @var bool
      */
    public $timestamps = false;

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

	/**
      * Returns owning Channel for this model.
      *
      * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
      */
	public function channel()
	{
		return $this->belongsTo(Channel::class);
	}

	/**
      * Returns owning Notification for this model.
      *
      * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
      */
	public function notification()
	{
		return $this->belongsTo(Notification::class);
	}

	/**
      * Returns owning User for this model.
      *
      * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
      */
	public function user()
	{
		return $this->belongsTo(User::class);
	}
}
