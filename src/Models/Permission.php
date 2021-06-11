<?php

namespace Fusion\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Spatie\Permission\Models\Permission as BasePermission;

class Permission extends BasePermission
{
    use HasFactory;

    /**
     * Wildcard guard.
     *
     * @var string
     */
    protected $guard_name = '*';

    /**
     * [Override].
     *
     * A Permission belongs to Users.
     * User Model is set in permissions config file.
     */
    public function users(): BelongsToMany
    {
        return $this->morphedByMany(
            config('permission.models.user'),
            'model',
            config('permission.table_names.model_has_permissions'),
            'permission_id',
            config('permission.column_names.model_morph_key')
        );
    }
}
