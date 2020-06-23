<?php

namespace Fusion\Console;

use Fusion\Facades\Addon;
use Illuminate\Console\Command;
use Illuminate\Console\ConfirmableTrait;

class AddonMigrateCommand extends Command
{
    use ConfirmableTrait;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:migrate {namespace?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run migrations for either all or specified addon';

    /**
     * @var Migrator
     */
    protected $migrator;

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();

        $this->migrator = app("migrator");;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $addon = Addon::where('namespace', $this->argument('namespace'))->first();

        if (! $addon and $this->argument('namespace')) {
            $this->comment("The \"{$this->argument('namespace')}\" addon does not exist.");
            return;
        }

        if ($addon) {
            $this->migrate($addon);
            return;
        }

        Addon::enabled()->each(function($addon) {
            $this->migrate($addon);
        });
    }

    protected function migrate($addon)
    {
        $path = addon_path("{$addon['namespace']}/database/migrations");

        $this->migrator->setOutput($this->output)->run($path);
    }
}