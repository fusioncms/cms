<?php

namespace Fusion\Console\Addons;

use Fusion\Facades\Addon;
use Illuminate\Console\Command;
use Illuminate\Console\ConfirmableTrait;
use Illuminate\Database\Migrations\Migrator;

class RefreshCommand extends Command
{
    use ConfirmableTrait;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:refresh {namespace?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset and re-run all migrations for either all or specified addon';

    /**
     * The migrator instance.
     *
     * @var \Illuminate\Database\Migrations\Migrator
     */
    protected $migrator;

    /**
     * Create a new migration rollback command instance.
     *
     * @param \Illuminate\Database\Migrations\Migrator $migrator
     *
     * @return void
     */
    public function __construct(Migrator $migrator)
    {
        parent::__construct();

        $this->migrator = $migrator;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (!$this->confirmToProceed()) {
            return 1;
        }

        $addon = Addon::where('namespace', $this->argument('namespace'))->first();

        if (!$addon and $this->argument('namespace')) {
            $this->comment("The \"{$this->argument('namespace')}\" addon does not exist.");

            return;
        }

        $paths = [];

        if ($addon) {
            $paths[] = addon_path("{$addon['namespace']}/database/migrations");
        } else {
            Addon::enabled()->each(function ($addon) use (&$paths) {
                $paths[] = addon_path("{$addon['namespace']}/database/migrations");
            });
        }

        $this->reset($paths);
        $this->migrate($paths);
    }

    protected function reset($paths)
    {
        $migrations = $this->migrator->reset($paths);

        if (count($migrations) === 0) {
            $this->info('Nothing to rollback.');

            return;
        }

        foreach ($migrations as $migration) {
            $name = $this->migrator->getMigrationName($migration);

            $this->line("<info>Rolled back:</info>  {$name}");
        }
    }

    protected function migrate($paths)
    {
        foreach ($paths as $path) {
            $this->migrator->setOutput($this->output)->run($path);
        }
    }
}
