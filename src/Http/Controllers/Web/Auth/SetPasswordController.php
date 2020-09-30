<?php

namespace Fusion\Http\Controllers\Web\Auth;

use Fusion\Http\Controllers\Controller;
use Fusion\Models\User;
use Fusion\Rules\FreshPassword;
use Fusion\Rules\SecurePassword;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth')->only('showExpiredForm', 'update');
    }

    /**
     * Display the `password expired` view for given user.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showExpiredForm(Request $request)
    {
        return $request->user()->passwordHasExpired()
                    ? view('auth.passwords.expire')
                    : redirect($this->redirectPath());
    }

    /**
     * Display the password set view for the given token.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $user       = $request->user();
        $attributes = $request->validate([
            'password' => [
                'required',
                'confirmed',
                new FreshPassword,
                new SecurePassword
            ]
        ]);

        $user->removePasswordExpiration();

        $this->setUserPassword($user, $attributes['password']);
        $user->setRememberToken(Str::random(60));
        $user->save();

        event(new PasswordReset($user));

        return $this->sendResetResponse($request, 'Success');
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
