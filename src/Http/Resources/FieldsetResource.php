<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FieldsetResource extends JsonResource
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

        $resource['fields'] = FieldResource::collection($this->fields);

        foreach ($this->fields as $field) {
            $resource[$field->handle] = $this->resource->{$field->handle};
        }

        return $resource;
    }
}
