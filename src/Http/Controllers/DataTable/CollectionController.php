<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Models\Matrix;
use Fusion\Actions\BulkAction;
use Fusion\Http\Controllers\DataTableController;

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
            'order',
            'created_at',
            'updated_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'slug',
            'order',
            'created_at',
            'updated_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
            'order',
            'created_at',
            'updated_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'       => 'Name',
            'slug'       => 'Slug',
            'order'       => 'Manual',
            'created_at' => 'Created',
            'updated_at' => 'Updated',
        ];
    }

    /**
     * Get the available bulk actions.
     *
     * @return array
     */
    protected function getBulkActions()
    {
        return BulkAction::all()->filter(function($action) {
            return true;
        })->map(function($action) {
            $action = new $action;
            $action = $action->toArray();

            if (isset($this->matrix->handle)) {
                $action['route'] .= '?matrix='.$this->matrix->handle;
            }
            return $action;
        })->values();
    }
}
