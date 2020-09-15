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
            'description',
            'created_at',
        ];
    }

    public function getSortable()
    {
        return [
            'description',
            'created_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'description' => 'Action',
            'created_at'  => 'Time',
        ];
    }
}
