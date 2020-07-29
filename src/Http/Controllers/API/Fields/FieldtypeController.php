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
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $fieldtypes = fieldtypes()->all();

        return FieldtypeResource::collection($fieldtypes);
    }

    public function show(Request $request, $slug)
    {
        $fieldtype = fieldtypes()->get($slug);

        return new FieldtypeResource($fieldtype);
    }
}
