<?php

namespace Fusion\Concerns;

trait HasRoles
{
    use \Spatie\Permission\Traits\HasRoles;

    /**
     * This overrides the `DefaultGuardName`
     *  so all Guards share the same set of Permissions.
     */
    protected $guard_name = '*';

    protected function getDefaultGuardName(): string
    {
        return $this->guard_name;
    }

    /**
     * Return first role.
     *
     * @return \Fusion\Models\Role|null
     */
    public function getRoleAttribute()
    {
        return $this->roles->first();
    }

    /**
     * Check the users current level. If their level is below or equal to
     * the level check, return true.
     *
     * @param  integer  $levelCheck
     * @return bool
     */
    public function level($levelCheck)
    {
        return $this->role->level <= $levelCheck;
    }

    /**
     * Owner role check.
     *
     * @return bool
     */
    public function isOwner()
    {
        return $this->hasRole('Owner');
    }

    /**
     * Returns throttle rate limit for authenticated user.
     *
     * @return int
     */
    public function getRateLimitAttribute()
    {
        if ($this->isOwner()) {
            return 1000;
        }

        return setting('api.rate_limit', 60);
    }
}
