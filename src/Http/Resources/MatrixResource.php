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
        $resource = [
            'id'                 => $this->id,
            'parent_id'          => $this->parent_id,
            'name'               => $this->name,
            'handle'             => $this->handle,
            'slug'               => $this->slug,
            'description'        => $this->description,
            'type'               => $this->type,
            'admin_path'         => $this->adminPath,
            'table'              => $this->table,

            'reference_singular' => $this->reference_singular,
            'reference_plural'   => $this->reference_plural,

            'sidebar'            => $this->sidebar,
            'quicklink'          => $this->quicklink,
            'icon'               => $this->icon,

            'route'              => $this->route,
            'template'           => $this->template,

            'show_name_field'    => $this->show_name_field,
            'name_label'         => $this->name_label,
            'name_format'        => $this->name_format,

            'order_by'           => $this->order_by,
            'order_direction'    => $this->order_direction,

            'status'             => $this->status,

            'blueprint'          => new BlueprintResource($this->blueprint),
            'parent'             => new MatrixResource($this->parent),
            'children'           => MatrixResource::collection($this->whenLoaded('children')),

            'created_at'         => $this->created_at,
            'updated_at'         => $this->updated_at,
        ];

        return $resource;
    }
}
