<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\CollectionRequest;
use Fusion\Http\Resources\EntryResource;
use Fusion\Models\Matrix;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CollectionController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param string $matrix
     *
     * @return JsonResponse
     */
    public function index($matrix)
    {
        $this->authorize('entries.viewAny');

        $matrix  = Matrix::where('slug', $matrix)->firstOrFail();
        $model   = Builders\Matrix::resolve($matrix->handle);
        $entries = $model->withoutGlobalScopes()->paginate(25);

        return EntryResource::collection($entries);
    }

    /**
     * Display the specified resource.
     *
     * @param \Fusion\Models\Matrix $matrix
     *
     * @return \Illuminate\Http\Response
     */
    public function show($matrix, $id)
    {
        $this->authorize('entries.view');

        $matrix = Matrix::where('slug', $matrix)->firstOrFail();
        $model  = Builders\Matrix::resolve($matrix->handle);
        $entry  = $model->withoutGlobalScopes()->findOrFail($id);

        return new EntryResource($entry);
    }

    /**
     * Store newly created record in storage.
     *
     * @param \Fusion\Http\Requests\CollectionRequest $request
     * @param string                                  $matrixSlug
     *
     * @return \Fusion\Http\Resources\EntryResource
     */
    public function store(CollectionRequest $request, $matrixSlug)
    {
        $entry  = $request->model->create($request->validated());
        $matrix = $request->matrix;

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($entry, $relationship);
        }

        // Autogenerate name/slug
        if (!$matrix->show_name_field) {
            $entry->name = compile_blade_template($matrix->name_format, $entry);
            $entry->slug = Str::slug($entry->name);

            $entry->save();
        }

        return new EntryResource($entry);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Fusion\Http\Requests\CollectionRequest $request
     * @param string                                  $matrix
     * @param int                                     $id
     *
     * @return \Fusion\Http\Resources\EntryResource
     */
    public function update(CollectionRequest $request, $matrixSlug, $id)
    {
        $matrix = $request->matrix;
        $entry  = $request->model->withoutGlobalScopes()->findOrFail($id);

        $entry->update($request->validated());

        // persist relationships..
        foreach ($request->relationships as $relationship) {
            $relationship->type()->persistRelationship($entry, $relationship);
        }

        if (!$matrix->show_name_field) {
            $entry->name = compile_blade_template($matrix->name_format, $entry);
            $entry->slug = Str::slug($entry->name);

            $entry->save();
        }

        return new EntryResource($entry);
    }

    /**
     * Destroy resource from storage.
     *
     * @param Request $request
     * @param string  $matrixSlug
     * @param int     $id
     *
     * @return void
     */
    public function destroy(Request $request, $matrixSlug, $id)
    {
        $this->authorize('entries.destroy');

        $matrix = Matrix::where('slug', $matrixSlug)->firstOrFail();
        $model  = Builders\Matrix::resolve($matrix->handle);
        $entry  = $model->findOrFail($id);

        if (isset($matrix->blueprint)) {
            foreach ($matrix->blueprint->relationships() as $relationship) {
                fieldtypes()->get($relationship->type)->destroyRelationship($entry, $relationship);
            }
        }

        $entry->delete();
    }
}
