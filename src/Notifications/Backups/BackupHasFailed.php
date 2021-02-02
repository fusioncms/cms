<?php

namespace Fusion\Notifications\Backups;

use Illuminate\Notifications\Messages\MailMessage;
use Spatie\Backup\Events\BackupHasFailed as BackupHasFailedEvent;
use Spatie\Backup\Notifications\BaseNotification;

class BackupHasFailed extends BaseNotification
{
    /** @var \Spatie\Backup\Events\BackupHasFailed */
    protected $event;

    public function __construct(BackupHasFailedEvent $event)
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
            ->error()
            ->from(config('mail.from.address'), config('mail.from.name'))
            ->subject(trans('backup::notifications.backup_failed_subject', ['application_name' => $this->applicationName()]))
            ->line(trans('backup::notifications.backup_failed_body', ['application_name' => $this->applicationName()]))
            ->line(trans('backup::notifications.exception_message', ['message' => $this->event->exception->getMessage()]))
            ->line(trans('backup::notifications.exception_trace', ['trace' => $this->event->exception->getTraceAsString()]));

        $this->backupDestinationProperties()->each(function ($value, $name) use ($mailMessage) {
            $mailMessage->line("{$name}: $value");
        });

        return $mailMessage;
    }
}
