<?php

namespace Fusion\Console\Actions;

use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Artisan;

class ExitMaintenanceMode
{
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
