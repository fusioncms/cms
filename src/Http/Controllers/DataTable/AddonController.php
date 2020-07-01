<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Addon;
use Fusion\Http\Controllers\DataTableController;

class AddonController extends DataTableController
{
    public function builder()
    {
        return Addon::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'version',
            'description'
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'version',
            'description'
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'version',
            'description'
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'version'     => 'Version',
            'description' => 'Description',
        ];
    }
}
