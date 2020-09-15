<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Spatie\Activitylog\ActivitylogServiceProvider;

class ActivityController extends DataTableController
{
    public function builder()
    {
        return ActivitylogServiceProvider::determineActivityModel()->getQuery();
    }

    public function getRelationships()
    {
        return [
            'causer'
        ];
    }

    public function getDisplayableColumns()
    {
        return [
            'causer.name',
            'description',
            'created_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'causer.name',
            'description',
        ];
    }

    public function getSortable()
    {
        return [
            'causer.name',
            'description',
            'created_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'causer.name' => 'User',
            'description' => 'Action',
            'created_at'  => 'Time',
        ];
    }
}
