<?php

namespace Fusion\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Facade;
use Fusion\Http\Controllers\Controller;
use Symfony\Component\HttpFoundation\Request as SymfonyRequest;

class CustomizeController extends Controller
{
    public function show(Request $request)
    {
        $segments = $request->segments();

        array_pop($segments);

        $rootRoute   = '/'.implode('/', $segments);
        $rootRequest = Request::createFromBase(SymfonyRequest::create($rootRoute));

        $rootRequest->headers->set('X-FusionCMS-Customize', true);
        $rootRequest->attributes->set('customize', $request->all());

        app()->instance('request', $rootRequest);
        Facade::clearResolvedInstance('request');

        return app()->handle($rootRequest);

        // return $rootResponse;
    }
}