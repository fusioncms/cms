<?php

namespace Fusion\Http\Controllers\Web\Auth;

use Fusion\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SetPasswordController extends Controller
{
    /**
     * Display the password set view for the given token.
     *
     * If no token is present, display the link request form.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showSetForm(Request $request)
    {
        return view('auth.passwords.set')->with([
            'token' => $request->route()->parameter('token'),
            'email' => $request->email,
        ]);
    }
}
