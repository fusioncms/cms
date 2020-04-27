<?php

namespace Modules\BetaModule\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BetaResource extends JsonResource
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
