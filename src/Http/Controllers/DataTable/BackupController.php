<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Backup;

class BackupController extends DataTableController
{
    public function builder()
    {
        return Backup::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'disk',
            'size',
            'created_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'disk',
            'created_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'disk',
            'size',
            'created_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'       => 'Name',
            'disk'       => 'Disk',
            'size'       => 'Size',
            'created_at' => 'Created',
        ];
    }
}
