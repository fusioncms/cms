<?php

namespace Fusion\Http\Controllers\Web\Auth;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\User;
use Fusion\Rules\SecurePassword;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SetPasswordController extends Controller
{
    use ResetsPasswords;

    /**
     * Where to redirect users after setting their password.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Display the password set view for the given token.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showSetForm(Request $request)
    {
        return view('auth.passwords.set')->with([
            'token' => $request->token,
            'email' => $request->email,
        ]);
    }

    /**
     * Set the user's `password` and `password_changed_at` date.
     * [override].
     *
     * @param \Illuminate\Contracts\Auth\CanResetPassword $user
     * @param string                                      $password
     *
     * @return void
     */
    protected function setUserPassword($user, $password)
    {
        $user->password            = Hash::make($password);
        $user->password_changed_at = now();
    }

    /**
     * Validation rules.
     * [override].
     *
     * @return array
     */
    protected function rules()
    {
        return [
            'token'    => 'required',
            'email'    => 'required|email',
            'password' => ['required', 'confirmed', new SecurePassword()],
        ];
    }
}
