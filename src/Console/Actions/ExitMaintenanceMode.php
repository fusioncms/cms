<?php

namespace Fusion\Console\Actions;

use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;

class ExitMaintenanceMode
{
    use Dispatchable;
    use Queueable;

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        return Artisan::call('up');
    }
}
