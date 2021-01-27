<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlueprintResource extends JsonResource
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
            'id'         => $this->id,
            'name'       => $this->name,
            'structure'  => $this->structure,
            'hidden'     => $this->hidden,
            'sections'   => SectionResource::collection($this->sections),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
