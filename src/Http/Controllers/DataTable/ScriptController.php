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
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
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
