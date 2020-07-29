<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Spatie\Permission\Models\Role as BaseRole;

class Role extends BaseRole
{
    /**
     * Wildcard guard.
     *
     * @var string
     */
    protected $guard_name = '*';

    /**
     * [Override].
     *
     * A Role belongs to Users.
     * User Model is set in permissions config file.
     */
    public function users(): MorphToMany
    {
        return $this->morphedByMany(
            config('permission.models.user'),
            'model',
            config('permission.table_names.model_has_roles'),
            'role_id',
            config('permission.column_names.model_morph_key')
        );
    }
}
