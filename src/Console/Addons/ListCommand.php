<?php

namespace Fusion\Console\Addons;

use Fusion\Services\Addons\Addon;
use Illuminate\Console\Command;

class ListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addon:list';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List all registered addons';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $manifest = $this->getLaravel()->make('addons.manifest');
        $addons   = $manifest->getAddons()->map(function (Addon $addon) {
            return [
                'name'        => $addon->name,
                'version'     => $addon->version,
                'description' => $addon->description,
            ];
        })->toArray();

        $this->table(['Name', 'Version', 'Description'], $addons);
    }
}
