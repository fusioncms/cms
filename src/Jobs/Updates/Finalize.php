<?php

namespace Fusion\Jobs\Updates;

use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Artisan;

class Finalize
{
    use Dispatchable;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Artisan::call('fusion:flush');
        Artisan::call('fusion:sync');
        Artisan::call('fusion:publish');
        Artisan::call('migrate');
    }
}
