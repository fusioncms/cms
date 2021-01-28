<?php

namespace Fusion\Notifications\Backups;

use Illuminate\Notifications\Messages\MailMessage;
use Spatie\Backup\Events\CleanupWasSuccessful as CleanupWasSuccessfulEvent;
use Spatie\Backup\Notifications\BaseNotification;

class CleanupWasSuccessful extends BaseNotification
{
    /** @var \Spatie\Backup\Events\CleanupWasSuccessful */
    protected $event;

    public function __construct(CleanupWasSuccessfulEvent $event)
    {
        $this->event = $event;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array
     */
    public function via(): array
    {
        if (func_get_arg(0) instanceof \Fusion\Models\User) {
            return func_get_arg(0)->via(__CLASS__);
        }
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * 
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable): MailMessage
    {
        $mailMessage = (new MailMessage())
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->subject(trans('backup::notifications.cleanup_successful_subject', ['application_name' => $this->applicationName()]))
            ->line(trans('backup::notifications.cleanup_successful_body', ['application_name' => $this->applicationName(), 'disk_name' => $this->diskName()]));

        $this->backupDestinationProperties()->each(function ($value, $name) use ($mailMessage) {
            $mailMessage->line("{$name}: $value");
        });

        return $mailMessage;
    }
}
