<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Extension;

class ExtensionController extends DataTableController
{
    public function builder()
    {
        return Extension::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
        ];
    }
}
