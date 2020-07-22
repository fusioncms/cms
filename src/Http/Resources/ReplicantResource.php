<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplicantResource extends JsonResource
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
            'replicator' => new ReplicatorResource($this->parent)
        ];

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource[$field->handle] = $field->type()->getResource($this->resource, $field);
            }
        }

        return $resource;
    }
}
