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
}