<?php

namespace Fusion\Http\Controllers\Web\Account;

use Fusion\Http\Controllers\Controller;
use Fusion\Http\Requests\Account\SecurityRequest;
use Illuminate\Http\Request;

class SecurityController extends Controller
{
    /**
     * @param Request $request
     *
     * @return mixed
     */
    public function edit(Request $request)
    {
        return view('account.security');
    }

    /**
     * Update storage record.
     *
     * @param \Fusion\Http\Requests\Account\SecurityRequest $request
     *
     * @return Redirect
     */
    public function update(SecurityRequest $request)
    {
        $attributes = $request->validated();

        auth()->user()->update([
            'password'            => bcrypt($attributes['password']),
            'password_changed_at' => now(),
        ]);

        return back()->with('success', 'Password successfully updated!');
    }
}
