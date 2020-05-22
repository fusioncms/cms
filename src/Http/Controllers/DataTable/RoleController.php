<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Role;
use Fusion\Http\Controllers\DataTableController;

class RoleController extends DataTableController
{
    public function builder()
    {
        return Role::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'label',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'label'       => 'Name',
            'description' => 'Description',
        ];
    }

    public function getFilterable()
    {
        return [
            'label',
        ];
    }

    public function getSortable()
    {
        return [
            'label',
        ];
    }
}
