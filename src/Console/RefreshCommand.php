<?php

namespace Fusion\Console;

use Illuminate\Console\Command;

class RefreshCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fusion:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset and re-install FusionCMS without removing modules or themes';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('fusion:install', [
            '--refresh' => true,
        ]);
    }
}
