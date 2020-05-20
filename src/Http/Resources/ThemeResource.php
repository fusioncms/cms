<?php

namespace Fusion\Http\Resources;

use Fusion\Facades\Theme;
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
            'settings'    => $this->get('settings'),
            'value'       => $this->getSettingValues($this->get('namespace')),
        ];
    }

    protected function getSettingValues()
    {
        $settingsFilePath = storage_path('themes/'.$this->get('namespace').'.json');

        $defaults = collect($this->get('settings'))->mapWithKeys(function($setting, $handle) {
            return [$handle => $setting['default'] ?? null];
        });

        if (! \File::exists($settingsFilePath)) {
            return $defaults;
        }

        return json_decode(\File::get($settingsFilePath), true);
    }
}
