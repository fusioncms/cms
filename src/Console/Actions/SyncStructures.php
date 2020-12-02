<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Structure;

class SyncStructures
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        collect(config('fusion.structures'))->each(function ($structure) {
            Structure::firstOrCreate(
                [
                    'handle' => str_handle($structure['name']),
                ],
                [
                    'name'     => $structure['name'],
                    'excluded' => $structure['excluded'],
                ]
            );
        });
    }
}
