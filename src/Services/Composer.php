<?php

namespace Fusion\Services;

use Fusion\Facades\Version;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\PhpExecutableFinder;
use Symfony\Component\Process\Exception\ProcessFailedException;

class Composer
{
    /**
     * Base path for packages.
     *
     * @var string
     */
    private $basePath;

    /**
     * Memory limit for composer.
     * 
     * @var string
     */
    private $memoryLimit = '2048M';

    /**
     * Constructor.
     * 
     * @param string $basePath
     */
    public function __construct($basePath = null)
    {
        $this->basePath = $basePath ?? fusion_path();
    }

    /**
     * Runs `composer require` command.
     *
     * @param  mixed $packages
     * @return void
     */
    public function require($packages)
    {
        $packages = is_array($packages) ? $packages : [ $packages ];
        $command  = sprintf('require %s', implode(' ', $packages));

        try {
            $this
                ->process($command, [
                    '--update-with-dependencies',
                ])
                ->mustRun(function($type, $buffer) {
                    // TODO:
                });
        } catch (ProcessFailedException $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }

    /**
     * Runs `composer remove` command.
     *
     * @param  mixed $packages
     * @return void
     */
    public function remove($packages)
    {
        $packages = is_array($packages) ? $packages : [ $packages ];
        $command  = sprintf('remove %s', implode(' ', $packages));
        $process  = $this->process($command, [
            '--update-with-dependencies',

        ]);

        try {
            $process->mustRun(function($type, $buffer) {
                // TODO:
            });
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

        try {
            $this->process($command, [
                '--with-dependencies'
            ])->mustRun(function ($type, $buffer) {
                // TODO:
                dump($buffer);
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
    public function installed()
    {
        return $this->all()->toArray();
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
            $this->all()->get($package)->version);
    }

    /**
     * Returns package path.
     * 
     * @param  string $package
     * @return mixed
     */
    public function path($package)
    {
        return $this->paths()->get($package, null);
    }

    /**
     * Returns package by name.
     * 
     * @param  string $package
     * @return array
     */
    public function get($package)
    {
        return $this->all()->get($package);
    }

    /**
     * Is package installed?
     * 
     * @param  string $package
     * @return boolean
     */
    public function has($package)
    {
        return $this->all()->has($package);
    }

    /**
     * Returns list of installed packages.
     * [Cached]
     * 
     * @return \Illuminate\Support\Collection
     */
    private function all()
    {
        Cache::forget('packages');
        return Cache::rememberForever('packages', function() {
            $process = $this->process('show', ['--direct', '--format=json']);
            $process->run();

            $output = collect(json_decode($process->getOutput()));

            if ($output->has('installed')) {
                return collect($output->get('installed'))->keyBy('name');
            }
            
            return $output;
        });
    }

    /**
     * Returns list of package paths.
     * [Cached]
     * 
     * @return \Illuminate\Support\Collection
     */
    private function paths()
    {
        Cache::forget('package_paths');
        return Cache::rememberForever('package_paths', function() {
            $process = $this->process('show', ['--direct', '--path', '--format=json']);
            $process->run();

            $output = collect(json_decode($process->getOutput()));

            if ($output->has('installed')) {
                return collect($output->get('installed'))
                    ->mapWithKeys(function($item) {
                        return [$item->name => $item->path];
                    });
            }

            return $output;
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
        $command = array_merge(
            [
                (new PhpExecutableFinder)->find(),
                "-d memory_limit={$this->memoryLimit}",
                exec('which composer')
            ],
            explode(' ', $command),
            $flags
        );

        return (new Process($command, $this->basePath))->setTimeout(null);

    }
}
