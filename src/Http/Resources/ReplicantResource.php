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
            'id'      => $this->id,
            'section' => new SectionResource($this->section),
            'fields'  => [],
        ];

        foreach ($this->section->fields as $field) {
            $resource['fields'][$field->handle] =
                $field->type()->getResource($this->resource, $field);
        }

        return $resource;
    }
}
