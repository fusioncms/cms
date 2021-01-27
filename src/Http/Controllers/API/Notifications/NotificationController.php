<?php

namespace Fusion\Http\Controllers\API\Notifications;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\NotificationResource;
use Fusion\Models\Notification;
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
        $notifications = Notification::paginate(25)->groupBy('group');

        return NotificationResource::collection($notifications);
    }
}
