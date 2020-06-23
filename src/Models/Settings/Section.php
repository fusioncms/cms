<?php

namespace Fusion\Models\Settings;

use Fusion\Database\Eloquent\Model;
use Fusion\Concerns\HasLocalEloquentData;

class Section extends Model
{
    use HasLocalEloquentData;

    /**
     * Settings Relationship.
     * 
     * @return mixed
     */
    public function settings()
    {
        return $this->hasMany(Field::class, 'section_id', 'handle');
    }

    /**
     * Establish records.
     * 
     * @return array
     */
	public function getRows()
	{
		return \Setting::sections();
	}
} 