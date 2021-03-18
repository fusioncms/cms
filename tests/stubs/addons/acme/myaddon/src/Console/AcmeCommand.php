<?php

namespace Acme\Myaddon\Console;

use Illuminate\Console\Command;

class AcmeCommand extends Command
{
	/**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'acme:motivate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Inspiration from ACME.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        return $this->info('You can do it!');
    }
}