<?php

namespace Fusion\Http\Controllers\DataTable;

use Spatie\Permission\Models\Permission;
use Fusion\Http\Controllers\DataTableController;

class PermissionController extends DataTableController
{
    public function builder()
    {
        return Permission::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'guard_name',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'guard_name'  => 'Guard',
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
