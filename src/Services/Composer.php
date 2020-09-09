<?php

namespace Fusion\Services;

use Fusion\Facades\Version;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\PhpExecutableFinder;
use Symfony\Component\Process\Process;

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
    private $memoryLimit;

    /**
     * Constructor.
     *
     * @param string $basePath
     */
    public function __construct($basePath = null)
    {
        $this->basePath    = $basePath ?? fusion_path();
        $this->memoryLimit = config('fusion.composer.memory_limit');
    }

    /**
     * Runs `composer require` command.
     *
     * @param mixed $packages
     * @param array $flags
     *
     * @return void
     */
    public function require($packages, array $flags = [])
    {
        $this->run(
            'require '.implode(' ', Arr::wrap($packages)),
            array_merge(['--update-with-dependencies'], $flags)
        );
    }

    /**
     * Runs `composer update` command.
     *
     * @param mixed $packages
     * @param array $flags
     *
     * @return void
     */
    public function update($packages, array $flags = [])
    {
        $this->run(
            'update '.implode(' ', Arr::wrap($packages)),
            array_merge(['--with-dependencies'], $flags)
        );
    }

    /**
     * Runs `composer remove` command.
     *
     * @param mixed $packages
     * @param array $flags
     *
     * @return void
     */
    public function remove($packages, array $flags = [])
    {
        $this->run(
            'remove '.implode(' ', Arr::wrap($packages)),
            array_merge(['--update-with-dependencies'], $flags)
        );
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
     * @param string $package
     *
     * @return string
     */
    public function version($package)
    {
        return Version::standardize(
            $this->all()->get($package)->version
        );
    }

    /**
     * Returns package path.
     *
     * @param string $package
     *
     * @return mixed
     */
    public function path($package)
    {
        return $this->paths()->get($package, null);
    }

    /**
     * Returns package by name.
     *
     * @param string $package
     *
     * @return array
     */
    public function get($package)
    {
        return $this->all()->get($package);
    }

    /**
     * Is package installed?
     *
     * @param string $package
     *
     * @return bool
     */
    public function has($package)
    {
        return $this->all()->has($package);
    }

    /**
     * Returns list of installed packages.
     * [Cached].
     *
     * @return \Illuminate\Support\Collection
     */
    private function all()
    {
        return Cache::rememberForever('composer.packages', function () {
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
     * [Cached].
     *
     * @return \Illuminate\Support\Collection
     */
    private function paths()
    {
        return Cache::rememberForever('composer.paths', function () {
            $process = $this->process('show', ['--direct', '--path', '--format=json']);
            $process->run();

            $output = collect(json_decode($process->getOutput()));

            if ($output->has('installed')) {
                return collect($output->get('installed'))
                    ->mapWithKeys(function ($item) {
                        return [$item->name => $item->path];
                    });
            }

            return $output;
        });
    }

    /**
     * Bust cache.
     *
     * @return void
     */
    private function bustCache()
    {
        Cache::forget('composer.packages');
        Cache::forget('composer.paths');
    }

    /**
     * Run composer process.
     * Log output.
     *
     * @param string $command
     * @param array  $flags
     *
     * @return void
     */
    private function run($command, array $flags = [])
    {
        try {
            $this
                ->process($command, $flags)
                ->mustRun(function ($type, $buffer) {
                    Log::channel('composer')->info($buffer);
                });

            $this->bustCache();
        } catch (ProcessFailedException $exception) {
            Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);
        }
    }

    /**
     * Build new Process Component.
     *
     * @param string $command
     * @param array  $flags
     *
     * @@return \Symfony\Component\Process\Process
     */
    private function process($command, $flags = [])
    {
        $command = array_merge(
            [
                (new PhpExecutableFinder())->find(),
                "-d memory_limit={$this->memoryLimit}",
                exec('which composer'),
            ],
            explode(' ', $command),
            $flags
        );

        return (new Process($command, $this->basePath))->setTimeout(null);
    }
}
