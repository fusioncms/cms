<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Role;

class RoleController extends DataTableController
{
    public function builder()
    {
        return Role::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'level',
            'order',
            'description',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'level',
            'order',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'level',
            'order',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'level'       => 'Level',
            'order'      => 'Manual',
            'description' => 'Description',
        ];
    }
}
