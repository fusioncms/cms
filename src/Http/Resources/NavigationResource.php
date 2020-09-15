<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NavigationResource extends JsonResource
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
            'id'          => $this->id,
            'name'        => $this->name,
            'handle'      => $this->handle,
            'description' => $this->description,

            'table'       => $this->table,
            'blueprint'   => new BlueprintResource($this->blueprint),
            'nodes'       => NodeResource::collection($this->nodes),
        ];

        foreach ($this->blueprint->fields as $field) {
            $resource['fields'][$field->handle] = $this->{$field->handle};
        }

        return $resource;
    }
}
