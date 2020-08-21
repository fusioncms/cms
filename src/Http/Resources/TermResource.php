<?php

namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TermResource extends JsonResource
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
        $resource['id']       = $this->id;
        $resource['name']     = $this->name;
        $resource['slug']     = $this->slug;
        $resource['taxonomy'] = new TaxonomyResource($this->resource['taxonomy']);
        $resource['status']   = $this->status;

        if ($this->fields) {
            foreach ($this->fields as $field) {
                $resource[$field->handle] = $this->{$field->handle};
            }
        }

        return $resource;
    }
}
