<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;
use Fusion\Services\Routers\EntryRouter;
use Fusion\Services\Routers\HomepageRouter;
use Fusion\Services\Routers\SingleRouter;
use Fusion\Services\Routers\TaxonomyRouter;
use Illuminate\Http\Request;

class RouterController extends Controller
{
    /**
     * Delegate the request out to determine the route needed.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function handle(Request $request)
    {
        if (!app_installed()) {
            return redirect('/install');
        }

        $routers = [
            HomepageRouter::class,
            EntryRouter::class,
            SingleRouter::class,
            TaxonomyRouter::class,
        ];

        foreach ($routers as $router) {
            $result = app()->make($router)->handle($request);

            if ($result) {
                return $result;
            }
        }

        abort(404);
    }
}
