<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Navigation;

class NavigationController extends DataTableController
{
    public function builder()
    {
        return Navigation::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'description',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'description',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
            'description' => 'Description',
        ];
    }
}
