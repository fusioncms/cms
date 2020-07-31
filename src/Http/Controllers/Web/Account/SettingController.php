<?php

namespace Fusion\Http\Controllers\Web\Account;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\Account\SettingRequest;
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
        auth()->user()->update($request->validated());

        return back()->with('success', 'Account successfully updated!');
    }
}
