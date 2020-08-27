<?php

namespace Fusion\Jobs\Composer;

use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;


class Update implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * Packages.
     * 
     * @var array
     */
    private $packages = [];

    /**
     * Composer flags.
     * 
     * @var array
     */
    private $flags = [];

    /**
     * Constructor.
     * 
     * @param array $version = []
     * @param mixed $flags   = null
     */
    public function __construct(array $packages = [], $flags = null)
    {
        $this->packages = $packages;
        $this->flags    = $flags ?? [
            '--prefer-dist',
            '--with-dependencies',
            '--dry-run',
        ];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $command = sprintf('composer update %s %s',
            implode(' ', $this->packages),
            implode(' ', $this->flags)
        );

        $process = Process::fromShellCommandline($command, base_path());
        $process->setTimeout(null);
        
        try {
            $process->mustRun(function ($type, $buffer) {
dump($buffer);
            });
dd('OUT', $process->getOutput());
        } catch (ProcessFailedException $ex) {
dd('ERROR', $ex->getMessage());
            Log::error($ex->getMessage(), (array) $exception->getTrace()[0]);
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