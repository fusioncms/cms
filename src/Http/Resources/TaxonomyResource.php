<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaxonomyResource extends JsonResource
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
            'id'               => $this->id,
            'name'             => $this->name,
            'handle'           => $this->handle,
            'slug'             => $this->slug,
            'description'      => $this->description,
            'admin_path'       => $this->adminPath,
            'table'            => $this->getBuilderTable(),

            'sidebar'          => $this->sidebar,
            'icon'             => $this->icon,

            'route'            => $this->route,
            'template'         => $this->template,

            'blueprint'        => new BlueprintResource($this->blueprint),
            'terms'            => $this->terms,
        ];

        foreach ($this->blueprint->fields as $field) {
            $resource['fields'][$field->handle] = $this->{$field->handle};
        }

        return $resource;
    }
}
