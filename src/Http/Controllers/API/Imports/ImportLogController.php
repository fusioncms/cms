<?php

namespace Fusion\Http\Controllers\API\Imports;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ImportLogResource;
use Fusion\Models\ImportLog;
use Illuminate\Http\Request;

class ImportLogController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ImportLog $importLog)
    {
        $this->authorize('imports.viewAny');

        return new ImportLogResource($importLog);
    }
}
