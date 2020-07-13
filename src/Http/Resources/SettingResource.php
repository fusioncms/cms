<?php


namespace Fusion\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SettingResource extends JsonResource
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
            'id'          => $this->id,
            'name'        => $this->name,
            'handle'      => $this->handle,
            'group'       => $this->group,
            'icon'        => $this->icon,
            'description' => $this->description,
            'fieldset'    => new FieldsetResource($this->fieldset),
        ];
        
        if ($this->fieldset) {
            foreach ($this->fieldset->fields as $field) {
                $resource['settings'][$field->handle] = setting("{$this->handle}.{$field->handle}");
            }
        }

        return $resource;
    }
}
