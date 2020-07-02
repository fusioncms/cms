<?php

namespace Fusion\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Session;
use Fusion\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Request as SymfonyRequest;

class CustomizeController extends Controller
{
    public function show(Request $request)
    {
        $segments = $request->segments();
        array_pop($segments);
        $route = '/'.implode('/', $segments);

        $previous = (object) parse_url(session()->get('_previous.url'));

        if (
            (optional($previous)->path != '/admin/customize') and
            (optional($previous)->path != $request->path()) and
            (optional($previous)->path)
        ) {
            $route = $previous->path;
        }

        $secondaryRequest = Request::create($route);

        $secondaryRequest->headers->set('X-FusionCMS-Customize', true);
        $secondaryRequest->attributes->set('customize', $request->all());

        return app()->handle($secondaryRequest);
    }
}