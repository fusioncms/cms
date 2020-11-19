<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
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
        $resource = [
            'matrix' => new MatrixResource($this->resource['matrix']),
        ];

        $fields = $this->resource['matrix']->blueprint->fields;

        foreach ($this->fields as $field) {
            $resource['collection'][$field->handle] = $field->type()->getResource($this->resource, $field);
        }

        $resource['collection']['status'] = $this->resource['collection']['status'];

        return $resource;
    }
}
