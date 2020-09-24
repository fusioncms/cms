<?php

namespace Fusion\Http\Controllers\Web\Account;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\Account\SettingRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Simple redirect to the edit route.
     *
     * @return Response
     */
    public function index()
    {
        return redirect('account/settings');
    }

    /**
     * Show the specific resource.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return View
     */
    public function edit(Request $request)
    {
        return view('account.settings');
    }

    /**
     * Update an existing resource in storage.
     *
     * @param \Fusion\Http\Requests\Account\SettingRequest $request
     *
     * @return Redirect
     */
    public function update(SettingRequest $request)
    {
        $user         = $request->user();
        $attributes   = $request->validated();
        $emailUpdated = $attributes['email'] !== $user->email;

        // update..
        $user->update($attributes);

        // email update requires new verification..
        if ($emailUpdated && $user instanceof MustVerifyEmail) {
            $user->markEmailAsUnverified();
            $user->sendEmailVerificationNotification();
        }

        return back()->with('success', 'Account successfully updated!');
    }
}
