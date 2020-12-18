<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Fusion\Services\Builders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class SingleRouter extends Router
{
    public function handle(Request $request)
    {
        $singles = Matrix::where('type', 'single')->get();

        foreach ($singles as $matrix) {
            $found = $this->matchRoute($matrix->route, $request);

            if ($found === false or empty($matrix->template)) {
                continue;
            }

            $page = Builders\Matrix::resolve($matrix->handle);

            if (request()->has('preview')) {
                $page = $page->withoutGlobalScopes();
            }

            $page = $page->firstOrFail();

            if (!$page->status) {
                if (Gate::denies('access.controlPanel') || !request()->has('preview')) {
                    continue;
                }
            }

            $data = $this->bindRouteData($page->route, $request, [
                'matrix' => $matrix,
                'page'   => $page,
            ]);

            return view($matrix->template, $data);
        }
    }
}
