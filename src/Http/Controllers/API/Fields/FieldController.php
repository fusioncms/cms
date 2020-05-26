<?php

namespace Fusion\Http\Controllers\API\Fields;

use Fusion\Models\Field;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Fusion\Http\Requests\FieldRequest;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\FieldResource;

class FieldController extends Controller
{
    /**
     * Reorder fields in storage.
     *
     * @param  Request $request
     * @return void
     */
    public function reorder(Request $request)
    {
        $this->authorize('fields.reorder');

        DB::transaction(function () {
            foreach (request()->get('fields') as $index => $field) {
                Field::find($field)->update([ 'order' => $index ]);
            }
        });
    }

    /**
     * Validate field, but don't persist to storage.
     *
     * @param  \Fusion\Http\Requests\FieldRequest $request
     * @return \Illuminate\Http\Response
     */
    public function valid(FieldRequest $request)
    {
        return response()->json($request->all());
    }
}
