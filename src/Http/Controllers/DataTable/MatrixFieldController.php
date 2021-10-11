<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Matrix;

class MatrixFieldController extends DataTableController
{
    public function builder()
    {
        if (request()->has('matrix')) {
            return Matrix::find(request()->route('matrix'))->fields()->getQuery();
        } else {
            return Matrix::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'fieldtype',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'fieldtype',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'      => 'Name',
            'handle'    => 'Handle',
            'fieldtype' => 'Fieldtype',
        ];
    }
}
