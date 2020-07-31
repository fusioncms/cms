<?php

namespace Fusion\Http\Controllers\Web;

use Fusion\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CustomizeController extends Controller
{
    public function show(Request $request)
    {
        $segments = $request->segments();

        array_pop($segments);

        $url = '/'.implode('/', $segments);
        $subRequest = $this->createNewRequest($request, $url);

        $subRequest->session()->flash('customizing', true);
        $subRequest->attributes->set('customize', $request->all());

        return app()->handle($subRequest);
    }

    /**
     * Create a new request object.
     *
     * @param \Illuminate\Http\Request $request
     * @param string                   $url
     *
     * @return \Illuminate\Http\Request
     */
    protected function createNewRequest(Request $from, $url)
    {
        $request = Request::createFrom($from);

        $request->server->set('REQUEST_METHOD', 'GET');
        $request->server->set('REQUEST_URI', $url);

        return $request;
    }
}
