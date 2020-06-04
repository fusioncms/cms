<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Illuminate\Http\Request;
use Fusion\Services\Builders\Single;
use Illuminate\Support\Facades\Gate;

class SingleRouter extends Router
{
    public function handle(Request $request)
    {
        $singles = Matrix::where('type', 'single')->get();

        foreach ($singles as $matrix) {
            $found = $this->matchRoute($matrix->route, $request);

            if ($found === false or empty($matrix->template)) {
                continue 1;
            }

            $model = (new Single($matrix->handle))->make();
            $page  = $model->firstOrFail();

            if (!$page->status) {
                if (Gate::denies('access.controlPanel') || !request()->has('preview')) {
                    continue 1;
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
