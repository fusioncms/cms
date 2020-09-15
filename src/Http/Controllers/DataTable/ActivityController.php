<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Spatie\Activitylog\ActivitylogServiceProvider;

class ActivityController extends DataTableController
{
    public function builder()
    {
        return app(ActivitylogServiceProvider::determineActivityModel())->with('causer', 'subject');
    }

    public function getRelationships()
    {
        return [
            'causer',
            'subject',
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
            'description',
        ];
    }

    public function getSortable()
    {
        return [
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
