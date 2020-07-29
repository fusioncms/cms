<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Matrix;

class MatrixController extends DataTableController
{
    public function builder()
    {
        return Matrix::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'description',
            'type',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'description',
            'type',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'description',
            'type',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
            'description' => 'Description',
            'type'        => 'Type',
        ];
    }
}
