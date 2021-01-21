<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    public function toArray($request)
    {
        return [
            'channel'      => new ChannelResource($this->channel),
            'notification' => new NotificationResource($this->notification),
            // 'user'         => new UserResource($this->user),
        ];
    }
}
