<?php

namespace Fusion\Http\Controllers\API\Fields;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\FieldtypeResource;
use Illuminate\Http\Request;

class FieldtypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\FieldtypeResource
     */
    public function index(Request $request)
    {
        $fieldtypes = fieldtypes()->all();

        return FieldtypeResource::collection($fieldtypes);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $handle
     *
     * @return \Fusion\Http\Resources\FieldtypeResource
     */
    public function show(Request $request, $handle)
    {
        $fieldtype = fieldtypes()->get($handle);

        return new FieldtypeResource($fieldtype);
    }
}
