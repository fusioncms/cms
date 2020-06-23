<?php

namespace Fusion\Models\Settings;

use Fusion\Database\Eloquent\Model;
use Fusion\Concerns\HasLocalEloquentData;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class Field extends Model
{
    use HasLocalEloquentData;

    protected $table = 'settings';

    /**
     * Section Relationship.
     * 
     * @return mixed
     */
    public function section() {
        return $this->belongsTo(Section::class, 'section_id', 'handle');
    }

    /**
     * Establish records.
     * 
     * @return array
     */
	public function getRows()
	{
		return \Setting::settings()->all();
	}

    /**
     * Get `value` attribute.
     * 
     * @return mixed
     */
    public function getValueAttribute()
    {
        return $this->default;
        // return \Setting::get($this->handle, $this->default);
    }
}