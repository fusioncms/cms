<?php

namespace Fusion\Http\Controllers\API\Notifications;

use Exception;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NotificationResource;
use Fusion\Models\{Notification,User};
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Fusion\Http\Resources\NotificationResource
     */
    public function index(Request $request)
    {
        $notifications = Notification::paginate(25);

        return NotificationResource::collection($notifications);
    }

    /**
     * Display specified resource.
     *
     * @param \Fusion\Models\Notification $notification
     *
     * @return \Fusion\Http\Resources\NotificationResource
     */
    public function show(Notification $notification)
    {
        return new NotificationResource($notification);
    }
}
