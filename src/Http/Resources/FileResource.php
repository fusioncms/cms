<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
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
        $resource = parent::toArray($request);

        $resource['url'] = url($resource['url']);
        $resource['directory_id'] = (int) $resource['directory_id'];

        return $resource;
    }
}
