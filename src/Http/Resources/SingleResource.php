<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleResource extends JsonResource
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
            'matrix'   => new MatrixResource($this->matrix),
            'single'   => [
                'name'       => $this->name ?? $this->matrix->name,
                'slug'       => $this->slug ?? $this->matrix->slug,
                'status'     => $this->status,
                'publish_at' => $this->publish_at,
                'expire_at'  => $this->expire_at,
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ],
        ];

        foreach ($this->fields as $field) {
            $resource['single'][$field->handle] = $field->type()->getResource($this->resource, $field);
        }

        return $resource;
    }
}
