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
        $resource = [
            'id'         => $this->id,
            'name'       => $this->name,
            'handle'     => $this->handle,
            'field'      => new FieldResource($this->field),
            'replicants' => ReplicantsResource::collection($this->replicants),
        ];
        
        return $resource;
    }
}
