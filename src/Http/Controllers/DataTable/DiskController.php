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
            'handle',
            'order',
            'driver',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'order',
            'driver',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'order',
            'driver',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'order'      => 'Manual',
            'driver' => 'Driver',
        ];
    }
}
