<?php

namespace Acme\Myaddon\Notifications;

use Acme\Myaddon\Models\Acme;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AcmeNotification extends Notification
{
    /**
     * @var \Acme\Myaddon\Models\Acme
     */
    public $acme;

    /**
     * Construct new instance.
     *
     * @param \Acme\Myaddon\Models\Acme $acme
     */
    public function __construct(Acme $acme)
    {
        $this->acme = $acme;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     *
     * @return array
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     *
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage())
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->subject('Acme notification sent!');
    }
}
