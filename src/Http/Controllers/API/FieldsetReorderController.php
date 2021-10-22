<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\Fieldset;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FieldsetReorderController extends Controller
{
    protected $model;

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $fieldset
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $this->authorize('fieldsets.update');

        $this->walkRecords($request->records);
    }

    protected function walkRecords($item, $parent = 0)
    {
        foreach ($item as $order => $entry) {
            $record            = Fieldset::find($entry['id']);
            $record->order     = $order;

            $record->save();
        }
    }
}
