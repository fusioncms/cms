<?php

namespace Modules\BetaModule\Http\Controllers\DataTable;

use Modules\BetaModule\Models\Beta;
use Fusion\Http\Controllers\DataTableController;

class BetaController extends DataTableController
{
    public function builder()
    {
        return Beta::query();
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
            'description',
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
            'description' => 'Description',
        ];
    }
}
