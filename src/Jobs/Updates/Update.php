<?php

namespace Fusion\Jobs\Updates;

use Throwable;
use Fusion\Facades\Composer;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;

use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\PhpExecutableFinder;
use Symfony\Component\Process\Process;

class Update
{
    use Dispatchable;

    /**
     * Requested version.
     *
     * @var string
     */
    public $version;

    /**
     * Constructor.
     *
     * @param string $version
     */
    public function __construct($version)
    {
        $this->version = $version;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Composer::update("fusioncms/cms:{$this->version}");
    }

    /**
     * Handle a job failure.
     *
     * @throws \Throwable $exception
     * 
     * @return void
     */
    public function failed(Throwable $exception)
    {
        Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
    }
}
