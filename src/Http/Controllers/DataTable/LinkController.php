<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Navigation;

class LinkController extends DataTableController
{
    /**
     * @var \Fusion\Models\Navigation
     */
    protected $navigation;

    /**
     * Return builder instance.
     *
     * @return Builder
     */
    public function builder()
    {
        $this->navigation = Navigation::findOrFail(request()->route('navigation'));

        return $this->navigation->getBuilder()->query();
    }

    /**
     * Returns default order.
     *
     * @return string
     */
    protected function getDefaultSort()
    {
        return 'order';
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'url',
            'order',
            'created_at',
            'updated_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'url',
            'order',
            'created_at',
            'updated_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'url',
            'order',
            'created_at',
            'updated_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'       => 'Name',
            'url'       => 'URL',
            'order'       => 'Manual',
            'created_at' => 'Created',
            'updated_at' => 'Updated',
        ];
    }
}
