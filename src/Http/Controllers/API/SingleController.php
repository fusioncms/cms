<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\SingleRequest;
use Fusion\Http\Resources\MatrixResource;
use Fusion\Http\Resources\SingleResource;
use Fusion\Models\Matrix;
use Fusion\Services\Builders\Single;

class SingleController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param string $matrix
     *
     * @return JsonResponse
     */
    public function show($matrix)
    {
        $this->authorize('entries.show');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $single = (new Single($matrix->handle))->make();

        try {
            return new SingleResource($single->firstOrFail());
        } catch (\Exception $exception) {
            return new MatrixResource($matrix);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\SingleRequest $request
     * @param int                                 $id
     *
     * @return \Fusion\Http\Resources\SingleResource
     */
    public function update(SingleRequest $request, $id)
    {
        $matrix = $request->matrix;
        $attributes = $request->validated();

        $single = $request->model->updateOrCreate(['matrix_id' => $id], $attributes);

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($single, $relationship);
        }

        return new SingleResource($single);
    }
}
