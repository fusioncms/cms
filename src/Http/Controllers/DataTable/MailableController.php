<?php

namespace Fusion\Http\Controllers\DataTable;

use File;
use ReflectionClass;
use Fusion\Models\Mailable;
use Caffeinated\Themes\Facades\Theme;
use Fusion\Http\Controllers\DataTableController;

class MailableController extends DataTableController
{
    public function builder()
    {
        return Mailable::active();
    }

    public function getDisplayableColumns()
    {
        return [
            'name',
            'handle',
            'theme',
        ];
    }

    public function getFilterable()
    {
        return [
            'name',
            'handle',
            'theme',
        ];
    }

    public function getSortable()
    {
        return [
            'name',
            'handle',
            'theme',
        ];
    }

    public function getCustomColumnNames()
    {
        return [
            'name'   => 'Name',
            'handle' => 'Handle',
            'theme'  => 'Theme',
        ];
    }
}
