<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\User;

class UserController extends DataTableController
{
    public function builder()
    {
        if (request()->route('role')) {
            return User::whereHas('roles', function ($query) {
                $query->where('name', request()->route('role'));
            });
        } else {
            return User::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'email',
            'role',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'email',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'  => 'Name',
            'email' => 'E-mail',
            'role'  => 'Role',
        ];
    }
}
