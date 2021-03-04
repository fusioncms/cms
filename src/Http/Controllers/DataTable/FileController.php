<?php

namespace Fusion\Http\Controllers\DataTable;

use Fusion\Http\Controllers\DataTableController;
use Fusion\Models\File;

class FileController extends DataTableController
{
    public function builder()
    {
        if (request()->route('type')) {
            return File::where('mimetype', 'like', request()->route('type').'%');
        } else {
            return File::query();
        }
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'bytes',
            'extension',
            'created_at',
            'updated_at',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'bytes',
            'extension',
            'created_at',
            'updated_at',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'bytes',
            'extension',
            'created_at',
            'updated_at',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'       => 'Name',
            'bytes'      => 'Filesize',
            'extension'  => 'Extension',
            'created_at' => 'Created',
            'updated_at' => 'Last Modified',
        ];
    }
}
