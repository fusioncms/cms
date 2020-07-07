<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Setting;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Fusion\Http\Resources\SettingResource;

class SettingsController extends Controller
{
    /**
     * Request collection from storage.
     *
     * @param  Request $request
     * @return SettingResource
     */
    public function index(Request $request)
    {
        return SettingResource::collection(Setting::all());
    }

     /**
      * Request specific resource from storage.
      *
      * @param  Request  $request
      * @param  Setting  $setting
      * @return SettingResource
      */
    public function show(Request $request, Setting $setting)
    {
        return new SettingResource($setting);
    }

    /**
     * Update settings.
     *
     * @param  Request  $request
     * @param  Setting  $setting
     * @return JsonResponse
     */
    public function update(Request $request, Setting $setting)
    {
        $section->settings->each(function($setting) use ($request) {
            if ($request->has($setting->handle)) {
                if ($request->hasFile($setting->handle)) {
                    $file      = $request->file($setting->handle);
                    $extension = $file->getClientOriginalExtension();
                    $path      = $file->storeAs('/', $setting->handle . '.' . $extension, 'settings');

                    $setting->update([ 'value' => $path ]);
                } else {
                    $value = $request->get($setting->handle);

                    $setting->update([ 'value' => $value ]);
                }
            }
        });

        Artisan::call('route:clear');

        return new SettingSectionResource($section);
    }
}
