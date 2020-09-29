<?php

namespace Fusion\Mail;

use Fusion\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Password;

class ConfirmNewUser extends DatabaseMailable
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
     * Default inner template.
     *
     * @var string
     */
    protected $template = 'emails.templates.confirm';

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
        $this->viewData['url'] = url(route('password.setForm', [
            'token' => Password::broker()->createToken($this->user),
            'email' => $this->user->email,
        ], false));

        return parent::build();
    }
}
