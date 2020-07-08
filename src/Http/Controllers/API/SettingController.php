<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Models\Setting;
use Illuminate\Http\Request;
use Fusion\Http\Controllers\Controller;
use Illuminate\Support\Facades\Artisan;
use Fusion\Http\Requests\SettingRequest;
use Fusion\Http\Resources\SettingResource;

class SettingController extends Controller
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
     * @param  SettingRequest  $request
     * @param  Setting         $setting
     * @return void
     */
    public function update(SettingRequest $request, Setting $setting)
    {
        $setting->settings->update($request->validated());

        // persist relationships..
        foreach ($setting->fieldset->relationships() as $relationship) {
            $relationship->type()->persistRelationship($setting->settings, $relationship);
        }

        cache()->forget('settings');
    }
}
