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

        $route   = '/'.implode('/', $segments);
        $secondaryRequest = SymfonyRequest::create($route);

        $secondaryRequest->headers->set('X-FusionCMS-Customize', true);
        $secondaryRequest->attributes->set('customize', $request->all());

        return app()->handle($secondaryRequest);
    }
}