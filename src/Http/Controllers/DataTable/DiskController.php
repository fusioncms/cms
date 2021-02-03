<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Disk;

class DiskController extends DataTableController
{
    public function builder()
    {
        return Disk::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'driver',
            'created_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'driver',
            'created_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'driver',
            'created_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'       => 'Name',
            'driver'     => 'Driver',
            'created_at' => 'Created',
        ];
    }
}
