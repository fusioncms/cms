<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Script;

class ScriptController extends DataTableController
{
    public function builder()
    {
        return Script::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'order',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'order',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'order',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'order'      => 'Manual',
        ];
    }
}
