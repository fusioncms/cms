<?php

namespace Fusion\Http\Controllers\API\Imports;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ImportResource;
use Fusion\Models\Import;
use Fusion\Services\Exports\GoogleExport;
use Illuminate\Http\Request;

class ImportMappingController extends Controller
{
    /**
     * Display a specifie resource.
     *
     * @param Import $import
     *
     * @return resource
     */
    public function show(Import $import)
    {
        $this->authorize('imports.view');

        $this->generateMappingPreview($import);

        return new ImportResource($import);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Import  $import
     *
     * @return resource
     */
    public function update(Request $request, Import $import)
    {
        $this->authorize('imports.update');

        $attributes = $request->validate([
            'mappings' => 'required|array',
        ]);

        $import->update($attributes);

        return new ImportResource($import);
    }

    /**
     * Generate mapping preview by saving the first two
     *  row to storage.
     * [Helper].
     *
     * @param Import $import
     *
     * @return void
     */
    private function generateMappingPreview(Import $import)
    {
        $import->update([
            'preview' => (new GoogleExport($import->source, true))->array(),
        ]);
    }
}
