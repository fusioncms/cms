<?php

namespace Fusion\Services;

use Fusion\Facades\Version;
use Illuminate\Support\Composer;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\Process\PhpExecutableFinder;
use Symfony\Component\Process\Exception\ProcessFailedException;

class Package extends Composer
{
    /**
     * Runs `composer require` command.
     * 
     * @return void
     */
    public function install($package)
    {
        $packages = is_array($packages) ? $packages : [ $packages ];
        $command  = sprintf('require %s', implode(' ', $packages));
        $process  = $this->process($command, ['--ansi']);

        try {
            $process->mustRun();
        } catch (ProcessFailedException $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }

    /**
     * Runs `composer remove` command.
     * 
     * @return void
     */
    public function remove($package)
    {
        $packages = is_array($packages) ? $packages : [ $packages ];
        $command  = sprintf('remove %s', implode(' ', $packages));
        $process  = $this->process($command, ['--ansi']);

        try {
            $process->mustRun();
        } catch (ProcessFailedException $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }

    /**
     * Runs `composer update` command.
     *
     * @param  mixed $packages - one or more packages to update
     * @return void
     */
    public function update($packages)
    {
        $packages = is_array($packages) ? $packages : [ $packages ];
        $command  = sprintf('update %s', implode(' ', $packages));
        $process  = $this->process($command, [
            '--prefer-dist',
            '--with-dependencies',
            '--dry-run',
            '--ansi'
        ]);

        try {
            $process->mustRun(function ($type, $buffer) {
                // TODO:
            });
        } catch (ProcessFailedException $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }

    /**
     * Returns list of installed packages.
     * 
     * @return array
     */
    public function show()
    {
        return $this->installed()->toArray();
    }

    /**
     * Returns package version.
     * 
     * @param  string $package
     * @return string
     */
    public function version($package)
    {
        return Version::standardize(
            $this->installed()->get($package)->version);
    }

    /**
     * Returns package by name.
     * 
     * @param  string $package
     * @return array
     */
    public function get($package)
    {
        return $this->installed()->get($package);
    }

    /**
     * Is package installed?
     * 
     * @param  string $package
     * @return boolean
     */
    public function has($package)
    {
        return $this->installed()->has($package);
    }

    /**
     * Get the PHP binary.
     * [Override]
     *
     * @return string
     */
    protected function phpBinary()
    {
        return (new PhpExecutableFinder)->find(false);
    }

    /**
     * Returns list of installed packages.
     * [Cached]
     * 
     * @return \Illuminate\Support\Collection
     */
    private function installed()
    {
        return Cache::rememberForever('packages', function() {
            $process = $this->process('show', ['--direct', '--format=json']);
            $process->run();

            return collect(
                json_decode($process->getOutput())->installed
            )->keyBy('name');
        });
    }

    /**
     * Build new Process Component.
     * 
     * @param  string $command
     * @param  array  $flags
     * @@return \Symfony\Component\Process\Process
     */
    private function process($command, $flags = [])
    {
        return $this->getProcess(
            array_merge(
                $this->findComposer(),
                explode(' ', $command),
                $flags
            )
        );
    }
}
