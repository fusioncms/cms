<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Disk;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class DiskReorderController extends Controller
{
    protected $model;

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $disk
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $this->authorize('disks.update');

        $this->walkRecords($request->records);
    }

    protected function walkRecords($item, $parent = 0)
    {
        foreach ($item as $order => $entry) {
            $record            = Disk::find($entry['id']);
            $record->order     = $order;

            $record->save();
        }
    }
}
