<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Matrix;

class CollectionController extends DataTableController
{
    protected $matrix;
    protected $orderBy;
    protected $orderDirection;

    public function builder()
    {
        if (request()->route('collection')) {
            $matrix = Matrix::findOrFail(request()->route('collection'));
            
            $this->orderBy        = $matrix->order_by;
            $this->orderDirection = $matrix->order_direction;

            return $matrix->getBuilder()->query();
        } else {
            return Matrix::query();
        }
    }

    protected function getDefaultSort()
    {
        if (isset($this->matrix)) {
            return ($this->orderDirection ? '' : '-') . $this->orderBy;
        } else {
            return current($this->getSortable());
        }
    }


    public function getDisplayableColumns()
    {
        return [
            'name',
            'slug',
            'created_at',
            'updated_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'slug',
            'created_at',
            'updated_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
            'created_at',
            'updated_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'       => 'Name',
            'slug'       => 'Slug',
            'created_at' => 'Created',
            'updated_at' => 'Updated',
        ];
    }
}
