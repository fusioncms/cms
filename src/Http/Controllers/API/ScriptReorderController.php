<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Script;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ScriptReorderController extends Controller
{
    protected $model;

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $script
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $this->authorize('scripts.update');

        $this->walkRecords($request->records);
    }

    protected function walkRecords($item, $parent = 0)
    {
        foreach ($item as $order => $entry) {
            $record            = Script::find($entry['id']);
            $record->order     = $order;

            $record->save();
        }
    }
}
