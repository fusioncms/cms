<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\Taxonomy;

class TermController extends DataTableController
{
    public function builder()
    {
        if (request()->route('taxonomy')) {
            return Taxonomy::findOrFail(request()->route('taxonomy'))
                ->getBuilder()
                ->query();
        } else {
            return Taxonomy::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'slug',
            'order',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'slug',
            'order',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'slug',
            'order',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name' => 'Name',
            'slug' => 'Slug',
            'order'       => 'Manual',
        ];
    }
}
