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
     * Owner role check.
     * 
     * @return boolean
     */
    public function isOwner()
    {
        return $this->hasRole('owner');
    }

    /**
     * Returns throttle rate limit for authenticated user.
     * 
     * @return integer
     */
    public function getRateLimitAttribute()
    {
        // if ($this->isOwner()) {
        //     return 1000;
        // }

        return setting('api.rate_limit', 60);
    }
}