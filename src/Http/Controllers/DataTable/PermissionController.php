<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Permission;
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
