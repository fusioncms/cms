<?php

namespace Fusion\Mail;

use Fusion\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;

class SetPassword extends DatabaseMailable
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
     * Password set link.
     * 
     * @var string
     */
    public $url;

    /**
     * Default inner template.
     *
     * @var string
     */
    protected $template = 'emails.templates.setpassword';

    /**
     * Create a new message instance.
     *
     * @param User   $user
     * @param string $token
     *
     * @return void
     */
    public function __construct(User $user, string $token)
    {
        $this->user = $user;
        $this->url  = url(route('password.set', [
            'token' => $token,
            'email' => $user->email,
        ], false));
    }
}
