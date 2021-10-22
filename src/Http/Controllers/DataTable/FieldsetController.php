<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Fieldset;

class FieldsetController extends DataTableController
{
    public function builder()
    {
        return Fieldset::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'order',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'order',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'order',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'order'      => 'Manual',
        ];
    }
}
