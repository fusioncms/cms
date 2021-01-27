<?php

namespace Fusion\Console\Installer;

class CreateDefaultNotifications
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        dispatch(new \Fusion\Console\Actions\SyncNotifications());
    }
}
