<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Matrix;

class CollectionController extends DataTableController
{
    public function builder()
    {
        if (request()->route('collection')) {
            return Matrix::findOrFail(request()->route('collection'))
                ->getBuilder()
                ->query();
        } else {
            return Matrix::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'slug',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'slug',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'slug'   => 'Slug',
        ];
    }
}
