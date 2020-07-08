<?php

namespace Fusion\Http\Controllers\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Facade;
use Fusion\Http\Controllers\Controller;

class CustomizeController extends Controller
{
    public function show(Request $request)
    {
        $segments = $request->segments();
        array_pop($segments);
        $url = '/'.implode('/', $segments);

        $previous = (object) parse_url(session()->get('_previous.url'));

        if (
            (optional($previous)->path != '/'.config('fusion.path')) and
            (optional($previous)->path != '/'.config('fusion.path').'/customize') and
            (optional($previous)->path != $request->path()) and
            (optional($previous)->path)
        ) {
            $url = $previous->path;
        }

        $subRequest = $this->createNewRequest($request, $url);

        $subRequest->session()->flash('customizing', true);

        $subRequest->attributes->set('customize', $request->all());

        $subRequest->flash();

        return app()->handle($subRequest);
    }

    /**
     * Create a new request object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $url
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