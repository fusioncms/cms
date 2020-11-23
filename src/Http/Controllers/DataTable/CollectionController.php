<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Matrix;

class CollectionController extends DataTableController
{
    /**
     * @var \Fusion\Models\Matrix
     */
    protected $matrix;

    /**
     * Return builder instance.
     *
     * @return Builder
     */
    public function builder()
    {
        $this->matrix = Matrix::findOrFail(request()->route('collection'));

        return $this->matrix->getBuilder()->query();
    }

    /**
     * Returns default order.
     *
     * @return string
     */
    protected function getDefaultSort()
    {
        return ($this->matrix->order_direction ? '' : '-').$this->matrix->order_by;
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
