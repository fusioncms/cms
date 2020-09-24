<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\SettingRequest;
use Fusion\Http\Resources\SettingResource;
use Fusion\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Request collection from storage.
     *
     * @param Request $request
     *
     * @return SettingResource
     */
    public function index(Request $request)
    {
        return SettingResource::collection(Setting::all());
    }

    /**
     * Request specific resource from storage.
     *
     * @param Request $request
     * @param Setting $setting
     *
     * @return SettingResource
     */
    public function show(Request $request, Setting $setting)
    {
        return new SettingResource($setting);
    }

    /**
     * Update settings.
     *
     * @param SettingRequest $request
     * @param Setting        $setting
     *
     * @return void
     */
    public function update(SettingRequest $request, Setting $setting)
    {
        // Filter out relationships
        $relationships = $setting->blueprint->relationships();
        $validated     = collect($request->validated())->reject(function ($value, $handle) use ($relationships) {
            return $relationships->contains('handle', $handle);
        })->toArray();

        $setting->settings->update($validated);

        // Persist relationships...
        foreach ($relationships as $relationship) {
            $relationship->type()->persistRelationship($setting->settings, $relationship);
        }
    }
}
