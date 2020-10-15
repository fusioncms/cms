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
     * @param int $levelCheck
     *
     * @return bool
     */
    public function level($levelCheck)
    {
        return $this->role->level == 0 ? true : $this->role->level < $levelCheck;
    }

    /**
     * Owner role check.
     *
     * @return bool
     */
    public function isOwner()
    {
        return $this->hasRole('owner');
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

    /**
     * Determine if the model has (one of) the given role(s).
     *
     * @param string|int|array|\Spatie\Permission\Contracts\Role|\Illuminate\Support\Collection $roles
     * @param string|null                                                                       $guard
     *
     * @return bool
     */
    public function hasRole($roles, string $guard = null): bool
    {
        if (is_string($roles) && false !== strpos($roles, '|')) {
            $roles = $this->convertPipeToArray($roles);
        }

        if (is_string($roles)) {
            return $guard
                ? $this->roles->where('guard_name', $guard)->contains('handle', $roles)
                : $this->roles->contains('handle', $roles);
        }

        if (is_int($roles)) {
            return $guard
                ? $this->roles->where('guard_name', $guard)->contains('id', $roles)
                : $this->roles->contains('id', $roles);
        }

        if ($roles instanceof Role) {
            return $this->roles->contains('id', $roles->id);
        }

        if (is_array($roles)) {
            foreach ($roles as $role) {
                if ($this->hasRole($role, $guard)) {
                    return true;
                }
            }

            return false;
        }

        return $roles->intersect($guard ? $this->roles->where('guard_name', $guard) : $this->roles)->isNotEmpty();
    }
}
