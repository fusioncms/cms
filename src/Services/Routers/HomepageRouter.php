<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Illuminate\Http\Request;

class HomepageRouter extends Router
{
    public function handle(Request $request)
    {
        if ($this->matchRoute('/', $request)) {
            $single = Matrix::where('route', '/')->first();

            if ($single) {
                $data = fusion()->get('singles/' . $single->id);
                $data = $this->bindRouteData('/', $request, (array) $data->data);

                return view($single->template, $data);
            } else {
                return view('index');
            }
        }
    }
}
