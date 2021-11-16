<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Taxonomy;

class TaxonomyController extends DataTableController
{
    public function builder()
    {
        return Taxonomy::query();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'order',
            'description',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'order',
            'description',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'order',
            'description',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'        => 'Name',
            'handle'      => 'Handle',
            'order'      => 'Manual',
            'description' => 'Description',
        ];
    }
}
