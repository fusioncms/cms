<?php

namespace Fusion\Http\Controllers\API\Users;

use Exception;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\SubscriptionRequest;
use Fusion\Http\Resources\SubscriptionResource;
use Fusion\Models\{Notification,User};
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Fusion\Models\User $user
     *
     * @return \Fusion\Http\Resources\SubscriptionResource
     */
    public function index(Request $request, User $user)
    {
        return SubscriptionResource::collection($user->subscriptions);
    }

    /**
     * Subscribe to Notification.
     *
     * @param \Fusion\Http\Requests\SubscriptionRequest $request
     * @param \Fusion\Models\User $user
     * 
     * @throws \Exception
     *
     * @return \Fusion\Http\Resources\SubscriptionResource
     */
    public function store(SubscriptionRequest $request, User $user)
    {
        try {
            $attributes = $request->validated();

            $user->subscribeTo($attributes['channel'], $attributes['notification']);

            return response()->json([], 201);
        } catch (Exception $exception) {
            return response()->json(['status' => 'failed', 'message' => $exception->getMessage()]);
        }
    }

    /**
     * Unsubscribe from Notification.
     *
     * @param \Fusion\Http\Requests\SubscriptionRequest $request
     * @param \Fusion\Models\User $user
     * 
     * @throws \Exception
     *
     * @return \Fusion\Http\Resources\SubscriptionResource
     */
    public function destroy(SubscriptionRequest $request, User $user)
    {
        try {
            $attributes = $request->validated();

            $user->unsubscribeFrom($attributes['channel'], $attributes['notification']);

            return response()->json([], 200);
        } catch (Exception $exception) {
            return response()->json(['status' => 'failed', 'message' => $exception->getMessage()]);
        }
    }
}
