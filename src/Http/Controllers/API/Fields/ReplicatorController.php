<?php

namespace Fusion\Http\Controllers\API\Fields;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ReplicatorResource;
use Fusion\Models\Replicator;
use Illuminate\Http\Request;

class ReplicatorController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request  $request
     * @param \Fusion\Models\Replicator $replicator
     *
     * @return \Fusion\Http\Resources\ReplicatorResource
     */
    public function show(Request $request, Replicator $replicator)
    {
        return new ReplicatorResource($replicator);
    }
}
