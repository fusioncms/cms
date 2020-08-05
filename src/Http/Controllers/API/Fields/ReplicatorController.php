<?php

namespace Fusion\Http\Controllers\API\Fields;

use Illuminate\Http\Request;
use Fusion\Models\Replicator;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ReplicatorResource;

class ReplicatorController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request   $request
     * @param  \Fusion\Models\Replicator  $replicator
     * @return \Fusion\Http\Resources\ReplicatorResource
     */
    public function show(Request $request, Replicator $replicator)
    {
        return new ReplicatorResource($replicator);
    }
}
