<?php

namespace Fusion\Http\Controllers\API\Users;

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
     * @param \Fusion\Models\User      $user
     *
     * @return \Fusion\Http\Resources\NotificationResource
     */
    public function index(Request $request, User $user)
    {
        $this->authorize('notifications.viewAny');

        return NotificationResource::collection($user->notifications);
    }

    /**
     * Subscribe to Notification.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\User      $user
     *
     * @return \Fusion\Http\Resources\NotificationResource
     */
    public function store(Request $request, User $user)
    {
        $user->subscribeTo(
            $request->input('channel'),
            $request->input('notification'),
        );

        return NotificationResource::collection($user->notifications);
    }

    /**
     * Unsubscribe from Notification.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\User      $user
     *
     * @return \Fusion\Http\Resources\NotificationResource
     */
    public function destroy(Request $request, User $user)
    {
        $user->unsubscribeFrom(
            $request->input('channel'),
            $request->input('notification'),
        );
        
        return NotificationResource::collection($user->notifications);
    }
}
