<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MatrixResource extends JsonResource
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

        $resource['admin_path'] = $this->adminPath;
        $resource['table']      = $this->builderName();
        $resource['blueprint']  = new BlueprintResource($this->blueprint);
        $resource['parent']     = new MatrixResource($this->parent);
        $resource['children']   = MatrixResource::collection($this->whenLoaded('children'));

        return $resource;
    }
}
