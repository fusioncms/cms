<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Role;

class RolePermissionController extends DataTableController
{
    public function builder()
    {
        return Role::find(request()->route('role'))->permissions()->query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'description' => 'Description',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
        ];
    }
}
