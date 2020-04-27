<?php

namespace Modules\BetaModule\Http\Controllers\API;

use Illuminate\Http\Request;
use Modules\BetaModule\Models\Beta;
use Fusion\Http\Controllers\Controller;
use Modules\BetaModule\Http\Requests\BetaRequest;
use Modules\BetaModule\Http\Resources\BetaResource;

class BetaController extends Controller
{
    /**
     * Display all resources.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return JsonResponse
     */
    public function index(Request $request)
    {
        $this->authorize('beta.show');

        return BetaResource::collection(
            Beta::orderBy('name')->paginate(25)
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request   $request
     * @param  \Modules\BetaModule\Models\Beta  $beta
     * @return \Modules\Http\Responses\BetaResource
     */
    public function show(Request $request, Beta $beta)
    {
        $this->authorize('beta.show');

        return new BetaResource($beta);
    }

    /**
     * Store newly created record in storage.
     *
     * @param  \Modules\BetaModule\Http\Requests\BetaRequest  $request
     * @return \Modules\Http\Responses\BetaResource
     */
    public function store(BetaRequest $request)
    {
        $beta = Beta::create($request->validated());

        return new BetaResource($beta);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Modules\BetaModule\Http\Requests\BetaRequest  $request
     * @param  \Modules\BetaModule\Models\Beta                $beta
     * @return \Modules\Http\Responses\BetaResource
     */
    public function update(BetaRequest $request, Beta $betum)
    {
        $betum->update($request->validated());

        return new BetaResource($betum);
    }

    /**
     * Remove specified resource from storage.
     * 
     * @param  \Illuminate\Http\Request   $request
     * @param  \Modules\BetaModule\Models\Beta  $beta
     * @return void
     */
    public function destroy(Request $request, Beta $beta)
    {
        $this->authorize('beta.delete');

        $beta->delete();
    }
}
