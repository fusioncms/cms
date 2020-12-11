<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Fusion\Services\Builders;
use Illuminate\Http\Request;

class HomepageRouter extends Router
{
    public function handle(Request $request)
    {
        if ($this->matchRoute('/', $request)) {
            $matrix = Matrix::where('route', '/')->first();

            if ($matrix) {
                $model = Builders\Single::resolve($matrix->handle);
                $page  = $model->firstOrFail();

                return view(trim($matrix->template) == '' ? 'index' : $matrix->template, [
                    'matrix' => $matrix,
                    'page'   => $page,
                ]);
            } else {
                return view('index');
            }
        }
    }
}
