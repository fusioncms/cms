<?php

namespace Fusion\Jobs\Updates;

use Illuminate\Support\Facades\Artisan;

class Finalize
{
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

        // TODO: update `FUSION_VERSION`
    }
}
