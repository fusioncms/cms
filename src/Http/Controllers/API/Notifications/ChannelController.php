<?php

namespace Fusion\Http\Controllers\API\Notifications;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\ChannelResource;
use Fusion\Models\{Channel};
use Illuminate\Http\Request;

class ChannelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\ChannelResource
     */
    public function index(Request $request)
    {
        $channels = Channel::paginate(25);

        return ChannelResource::collection($channels);
    }
}
