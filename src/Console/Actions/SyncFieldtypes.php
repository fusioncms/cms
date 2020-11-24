<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Fieldtype;

class SyncFieldtypes
{
    /**
     * Update fieldtype records with default settings.
     *
     * @return void
     */
    public function handle()
    {
        fieldtypes()->all()->each(function($fieldtype) {
            $model = Fieldtype::firstOrCreate([
                'handle' => $fieldtype->getHandle(),
            ], [
                'exclude' => $fieldtype->exclude
            ]);

            $merged = array_merge($model->exclude->all(), $fieldtype->exclude);
            $merged = array_unique($merged);

            $model->update([ 'exclude' => $merged ]);
        });
    }
}
