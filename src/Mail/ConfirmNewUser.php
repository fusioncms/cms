<?php

namespace Fusion\Mail;

use Fusion\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Password;

class ConfirmNewUser extends Mailable
{
    use Queueable;
    use SerializesModels;

    /**
     * User instance.
     *
     * @var User
     */
    public $user;

    /**
     * Create a new message instance.
     *
     * @param User $user
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Include `token url` into $this->viewData.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->markdown('email.users.welcome')
            ->with([
                'url' => url(route('password.setForm', [
                    'token' => Password::broker()->createToken($this->user),
                    'email' => $this->user->email,
                ], false))
            ]);
    }
}
