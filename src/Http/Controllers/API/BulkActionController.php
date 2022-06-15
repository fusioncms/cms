<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Matrix;
use Fusion\Models\Taxonomy;
use Illuminate\Http\Request;
use Fusion\Actions\BulkAction;
use Fusion\Http\Controllers\Controller;

class BulkActionController extends Controller
{
    public function handle(Request $request)
    {
        $action = BulkAction::all()[$request->slug];

		if ($request->has('matrix')) {
        	$builder = Matrix::where('handle', $request->matrix)->firstOrFail();
		} else if ($request->has('taxonomy')) {
			$builder = Taxonomy::where('handle', $request->taxonomy)->firstOrFail();
		} else {
			abort(400, 'Bad request');
		}

        $entries = $builder->entries()
            ->withoutGlobalScope('enabled', 'expired', 'published')
            ->whereIn('id', $request->records)
            ->get();
        
        $action = new $action($entries);
        $action->handle();
    }
}