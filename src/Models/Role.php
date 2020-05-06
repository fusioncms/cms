<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Database\Eloquent\Model;
use Spatie\Activitylog\Models\Activity;
use Caffeinated\Shinobi\Concerns\HasPermissions;
use Caffeinated\Shinobi\Contracts\Role as RoleContract;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model implements RoleContract
{
    use HasPermissions, HasActivity;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = ['name', 'slug', 'description', 'special'];

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'roles';

    /**
     * Roles can belong to many users.
     *
     * @return Model
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(config('auth.model') ?: config('auth.providers.users.model'))->withTimestamps();
    }

    /**
     * Determine if role has permission flags.
     *
     * @return bool
     */
    public function hasPermissionFlags(): bool
    {
        return ! is_null($this->special);
    }

    public function hasPermissionThroughFlag(): bool
    {
        if ($this->hasPermissionFlags()) {
            return ! ($this->special === 'no-access');
        }

        return true;
    }

    /**
     * Tap into activity before persisting to database.
     *
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject    = $activity->subject;
        $action     = ucfirst($eventName);
        $properties = [
            'link' => "roles/{$subject->id}/edit",
            'icon' => 'id-badge'
        ];

        $activity->description = "{$action} user role ({$subject->name})";
        $activity->properties  = $properties;
    }
}
