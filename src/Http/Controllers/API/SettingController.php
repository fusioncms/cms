<?php

namespace Fusion\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\SettingRequest;
use Fusion\Http\Resources\SettingResource;
use Fusion\Models\Setting;
use Illuminate\Http\Request;
use Mail;

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
        $updates = collect($request->validated())
            ->mapWithKeys(function ($value, $key) use ($setting) {
                return ["{$setting->handle}.{$key}" => $value];
            })
            ->all();

        /**
         * Dev Note:
         * ---------
         * In order for FusionCMS to pick
         * up on changes we'll run our
         * updates through: Fusion\Services\Setting.
         */
        setting($updates);

        // Persist relationships...
        foreach ($setting->blueprint->relationships() as $relationship) {
            $relationship->type()->persistRelationship($setting->settings, $relationship);
        }
    }


    /**
     * Request specific resource from storage.
     *
     * @param Request $request
     * @param Setting $setting
     *
     * @return SettingResource
     */
    public function sendTestEmail(Request $request, $test_email)
    {
        $data = array();
        Mail::send('emails/test', $data, function($message) use ($test_email) {
            $message->to($test_email, setting('mail.mail_name'))->subject('Test Email');
            $message->from(setting('mail.mail_server'), setting('mail.mail_name'));
        });

        return response()->json([], 202);
    }
}
