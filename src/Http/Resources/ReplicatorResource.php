<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplicatorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $resource = parent::toArray($request);
        
        $resource['field']    = new FieldResource($this->field);
        $resource['sections'] = SectionResource::collection($this->sections);
        
        return $resource;
    }
}
