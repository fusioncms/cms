<?php

namespace Addons\Foobar\Http\Controllers\DataTable;

use Addons\Foobar\Models\Foobar;
use Fusion\Http\Controllers\DataTableController;

class FoobarController extends DataTableController
{
    public function builder()
    {
        return Foobar::query();
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
