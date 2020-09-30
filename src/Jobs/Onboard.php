<?php

namespace Fusion\Jobs;

use Exception;
use Fusion\Models\User;
use Fusion\Mail\WelcomeNewUser;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Onboard implements ShouldQueue
{
    use Dispatchable;
    use Queueable;
    use SerializesModels;

    /**
     * Requested version.
     *
     * @var \Fusion\Models\User
     */
    public $user;

    /**
     * Constructor.
     *
     * @param \Fusion\Models\User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (is_null($this->user->welcomed_at)) {
            $this->user->forceFill(['welcomed_at' => now()])->save();

            if (setting('users.user_email_welcome') === 'enabled') {
                Mail::to($this->user)
                    ->send(new WelcomeNewUser($this->user));
            }
        }
    }

    /**
     * The job failed to process.
     *
     * @param Exception $exception
     *
     * @return void
     */
    public function failed(Exception $exception)
    {
        Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
