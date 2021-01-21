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
	protected $table = 'channels_notifications_users';

	/**
      * Indicates if the model should be timestamped.
      *
      * @var bool
      */
    public $timestamps = false;

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

     /**
     * Get the query builder for a delete operation on the pivot.
     * [override]
     * 
     * @return \Illuminate\Database\Eloquent\Builder
     */
     protected function getDeleteQuery()
     {
          return $this->newQueryWithoutRelationships();
     }
}
