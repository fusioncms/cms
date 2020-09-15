<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\User;

class UserActivityController extends DataTableController
{
    public function builder()
    {
        return User::find(request()->route('user'))->activities()->getQuery();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'email',
            'role',
            'created_at',
            'email_verified_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'email',
            'created_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'              => 'Name',
            'email'             => 'E-mail',
            'role'              => 'Role',
            'created_at'        => 'Created',
            'email_verified_at' => 'Verified',
        ];
    }
}
