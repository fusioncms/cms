<?php

namespace Fusion\Http\Resources;

use Fusion\Facades\Theme;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Resources\Json\JsonResource;

class ThemeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name'        => $this->get('name'),
            'namespace'   => $this->get('namespace'),
            'description' => $this->get('description'),
            'author'      => $this->get('author'),
            'version'     => $this->get('version'),
            'active'      => $this->get('namespace') === Theme::getTheme(),
            'preview'     => "/themes/{$this->get('namespace')}/preview.png",
            'options'     => $this->get('options'),
            'option'      => $this->getOptionValues($this->get('namespace')),
        ];
    }

    protected function getOptionValues()
    {
        $optionsFilepath = storage_path('app/themes/'.$this->get('namespace').'.json');

        $defaults = collect($this->get('options'))->mapWithKeys(function($option, $handle) {
            return [$handle => $option['default'] ?? null];
        });

        if (! File::exists($optionsFilepath)) {
            return $defaults;
        }

        return json_decode(File::get($optionsFilepath), true);
    }
}
