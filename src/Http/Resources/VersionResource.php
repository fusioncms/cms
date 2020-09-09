<?php

namespace Fusion\Http\Resources;

use Fusion\Facades\Version;
use Illuminate\Http\Resources\Json\JsonResource;

class VersionResource extends JsonResource
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

        $resource['_isCurrent'] = version_compare(
            Version::standardize($resource['title']),
            Version::current(),
            '=='
        );

        return $resource;
    }
}
