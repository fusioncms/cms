<?php

namespace Fusion\Console;

use Fusion\Facades\Addon;
use Illuminate\Console\Command;

class AddonListCommand extends Command
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
        $headers = ['Name', 'Version', 'Description', 'Status'];
        $addons  = Addon::map(function($addon) {
            return [
                'name' => $addon['name'],
                'version' => $addon['version'],
                'description' => $addon['description'],
                'status' => $addon['installed'] ? ($addon['enabled'] ? 'Enabled' : 'Disabled') : 'Not installed',
            ];
        })->toArray();

        $this->table($headers, $addons);
    }
}