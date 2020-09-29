<?php

namespace Fusion\Http\Controllers\Web\Auth;

use Fusion\Models\User;
use Fusion\Http\Controllers\Controller;
use Fusion\Rules\FreshPassword;
use Fusion\Rules\SecurePassword;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\RedirectsUsers;

class SetPasswordController extends Controller
{
    use RedirectsUsers;

    /**
     * Where to redirect users after setting their password.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display the password set view for the given token.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showSetForm(Request $request)
    {
        return $request->user()->passwordHasExpired()
            ? view('auth.passwords.set')
            : redirect($this->redirectPath());
    }

    /**
     * Reset the given user's password.
     * 
     * @param  Request  $request
     * @return RedirectResponse|JsonResponse
     */
    public function setPassword(Request $request)
    {
        $user       = $request->user();
        $attributes = $request->validate($this->rules());

        // update password..
        $user->password = Hash::make($attributes['password']);
        $user->password_changed_at = now();
        $user->setRememberToken(Str::random(60));
        $user->save();

        event(new PasswordReset($user));

        return $request->wantsJson()
            ? response()->json(['message' => 'Password successfully updated!'], 200)
            : redirect($this->redirectPath())->with('status', 'Password successfully updated!');
    }

    /**
     * Validation rules.
     * 
     * @return array
     */
    protected function rules()
    {
        return [
            'password' => [
                'required',
                'confirmed',
                new FreshPassword(),
                new SecurePassword()
            ]
        ];
    }
}
