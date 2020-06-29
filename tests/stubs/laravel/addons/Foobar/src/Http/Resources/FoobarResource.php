<?php

namespace Addons\Foobar\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FoobarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
