<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\StructureResource;
use Fusion\Models\Structure;
use Illuminate\Http\Request;

class StructureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\StructureResource
     */
    public function index(Request $request)
    {
        $structures = Structure::all();

        return StructureResource::collection($structures);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param string $handle
     *
     * @return \Fusion\Http\Resources\StructureResource
     */
    public function show(Request $request, $handle)
    {
        $structure = Structure::where('handle', $handle)->firstOrFail();

        return new StructureResource($structure);
    }

    /**
     * Persist the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return void
     */
    public function store(Request $request)
    {
        collect($request->all())->each(function($structure) {
            Structure::find($structure['id'])->update([
                'excluded' => $structure['excluded']
            ]);
        });
    }
}
