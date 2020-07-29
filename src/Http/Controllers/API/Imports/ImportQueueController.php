<?php

namespace Fusion\Http\Controllers\API\Imports;

use Fusion\Http\Controllers\Controller;
use Fusion\Jobs\Importer\BeforeImport;
use Fusion\Models\Import;
use Illuminate\Http\Request;

class ImportQueueController extends Controller
{
    /**
     * Queue up an import from storage.
     *
     * @param Request $request
     * @param Import  $import
     *
     * @return void
     */
    public function store(Request $request, Import $import)
    {
        $this->authorize('imports.create');

        BeforeImport::dispatch($import)->onQueue('imports');

        return response()->json('Successfully queued!', 201);
    }
}
