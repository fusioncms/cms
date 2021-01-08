<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Permission;
use Fusion\Models\Role;

class PermissionController extends DataTableController
{
    public function builder()
    {
        if (request()->route('role')) {
            return Role::find(request()->route('role'))->permissions();
        } else {
            return Permission::query();
        }
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
