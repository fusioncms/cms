<?php

namespace Fusion\Http\Controllers\API\Fields;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\FieldRequest;

class FieldController extends Controller
{
    /**
     * Validate field, but don't persist to storage.
     *
     * @param \Fusion\Http\Requests\FieldRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function valid(FieldRequest $request)
    {
        return response()->json($request->all());
    }
}
